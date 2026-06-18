import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/posts/postsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <input type="text" className='form-control' placeholder="Buscar posts por título..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
};

export default SearchBar;