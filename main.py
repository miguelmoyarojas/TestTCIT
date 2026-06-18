import pdb

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

# ============== CORS Configuration ==============
origins = [
    "http://localhost:3000",      # React with Create React App
    "http://localhost:5173",      # Vite default port
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def db_connect():
    import psycopg2

    try:
        # 1. Establish the connection to the database
        connection = psycopg2.connect(
            host="127.0.0.1",       # Your server address (e.g., 'localhost' or an IP)
            database="ejercicio",   # Name of the database
            user="postgres",        # Database username
            password="admin",       # Database password
            port="5433"             # Default PostgreSQL port
        )

        # 2. Create a cursor object to execute SQL commands
        cursor = connection.cursor()
        return {"connection": connection, "cursor": cursor}

    except Exception as error:
        print(f"Error connecting to the database: {error}")
        return False

@app.get("/")
def read_root():
    return {"Hello": "World"}

class Post(BaseModel):
    nombre: str
    descripcion: str

@app.post("/create")
def create_root(post: Post):
    if not post.nombre or not post.descripcion:
        return False
    
    insert_query = """INSERT INTO ejercicio.post (nombre, descripcion) VALUES (%s, %s) RETURNING id, nombre, descripcion;"""
    record_to_insert = (post.nombre, post.descripcion)
    
    conn_data = db_connect()
    conn_data["cursor"].execute(insert_query, record_to_insert)
    inserted_row = conn_data["cursor"].fetchone()
    
    conn_data["connection"].commit()
    return {'id': inserted_row[0], 'nombre': inserted_row[1], 'descripcion': inserted_row[2]}

@app.delete("/delete/{post_id}")
def delete_root(post_id: int):
    if not post_id:
        return False

    conn_data = db_connect()
    conn_data["cursor"].execute("DELETE FROM ejercicio.post WHERE ejercicio.post.id = %s", (post_id,))
    conn_data["connection"].commit()

    return True

@app.get("/list")
def list_root():
    import psycopg2.extras

    conn_data = db_connect()

    with conn_data["connection"].cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
        cur.execute("SELECT * FROM ejercicio.post")
        result = cur.fetchall()

    return result