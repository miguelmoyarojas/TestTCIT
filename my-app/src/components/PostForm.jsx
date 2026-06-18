import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../features/posts/postsSlice';

const PostForm = () => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !descripcion) return;

    dispatch(createPost({
      nombre,
      descripcion,
      id: 1, // Fake userId for JSONPlaceholder
    }));

    setNombre('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-light p-3 border rounded shadow-sm">
        <h5>Crear Nuevo Post</h5>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <input type="text" className='form-control' placeholder="Nombre"
                value={nombre} onChange={(e) => setNombre(e.target.value)} required
              />
            </div>

            <div className="col-md-6 col-lg-6">
              <input
                type="text" className='form-control' placeholder="Descripción"
                value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required
              />
            </div>

            <div className="col-md-2 col-lg-2">
              <button type="submit" className='btn btn-success'>Insertar</button>
            </div>
          </div>
        </div>
      </div>
      
    </form>
  );
};

export default PostForm;