import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types'


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

SearchBar.propTypes = {
  onTextChange: PropTypes.func,
}

export default SearchBar;