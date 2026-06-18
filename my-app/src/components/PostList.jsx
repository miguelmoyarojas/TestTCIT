import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from '../features/posts/postsSlice';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, status, error, searchTerm } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter(post => {
    const searchField = (post.nombre || '').toString().toLowerCase();
    return searchField.includes(searchTerm.toLowerCase());
  });

  const handleDelete = (id) => {
    if (window.confirm('¿Seguro que desea borrar este post?')) {
      dispatch(deletePost(id));
    }
  };

  if (status === 'loading') return <p>Cargando posts...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className='container'>
      {filteredPosts.length === 0 ? (
        <div className='container'>
          <div className='row'>
            <div className="col-md-12 col-lg-12">No se han encontrado posts.</div>
          </div>
        </div>
      ) : (
        filteredPosts.map((post, key) => (
          <div className='container' key={post.id}>
            <div className='row'>
              <div className="col-md-4 col-lg-4">{post.nombre}</div>
              <div className="col-md-6 col-lg-6">{post.descripcion}</div>
              <div className="col-md-2 col-lg-2">
                <button className='btn btn-danger' onClick={() => handleDelete(post.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;