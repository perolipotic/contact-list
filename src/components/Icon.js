import React from 'react';
import search from '../assets/images/icons/search.svg';
import trash from '../assets/images/icons/trash.svg';
import edit from '../assets/images/icons/edit.svg';
import notFavourite from '../assets/images/icons/notFavourite.svg';
import favourite from '../assets/images/icons/favourite.svg';
import plus from '../assets/images/icons/plus.svg';

const icons = {
  search,
  trash,
  edit,
  notFavourite,
  favourite,
  plus,
}

const Icon = ({ icon, sizeBox }) => {
  return (
    <img
      style={{ width: sizeBox, height: sizeBox }}
      src={icons[icon]}
      alt={`icon-${icon}`} />
  )
}
export default Icon