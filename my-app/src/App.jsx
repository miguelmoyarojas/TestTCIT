import PostForm from './components/PostForm';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className='container'>
      <h3><center>Posts Manager</center></h3>
      
      <PostForm />
      <hr></hr>

      <SearchBar />
      <hr></hr>
      
      <div className='container'>
        <div className='row'>
          <div className="col-md-4 col-lg-4"><strong>Nombre</strong></div>
          <div className="col-md-6 col-lg-6"><strong>Descripción</strong></div>
          <div className="col-md-2 col-lg-2"><strong>Acciones</strong></div>
        </div>
      </div>
      <br></br>

      <PostList />
    </div>
  );
}

export default App;