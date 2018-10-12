import React from 'react';
import Icon from './Icon';

const SearchBar = () => {
  return (
    <div className='search'>
      <i className='search__icon'>
        <Icon icon='search' sizeBox='15px' />
      </i>
      <input className='search__input' type="text" />
    </div>
  )
}

export default SearchBar;