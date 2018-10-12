import React from 'react';
import Icon from './Icon';

const SearchBar = ({ onTextChange }) => {
  return (
    <div className='search'>
      <i className='search__icon'>
        <Icon icon='search' sizeBox='15px' />
      </i>
      <input onChange={onTextChange} className='search__input' type="text" />
    </div>
  )
}

export default SearchBar;