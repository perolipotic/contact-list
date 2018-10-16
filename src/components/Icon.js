import React from 'react';
import search from '../assets/images/icons/search.svg';
import trash from '../assets/images/icons/trash.svg';
import edit from '../assets/images/icons/edit.svg';
import notFavourite from '../assets/images/icons/notFavourite.svg';
import favourite from '../assets/images/icons/favourite.svg';
import plus from '../assets/images/icons/plus.svg';
import back from '../assets/images/icons/back.svg';
import email from '../assets/images/icons/email.svg';
import phone from '../assets/images/icons/phone.svg';
import user from '../assets/images/icons/user.svg';
import upload from '../assets/images/icons/upload.svg';
import clear from '../assets/images/icons/clear.svg';

const icons = {
  search,
  trash,
  edit,
  notFavourite,
  favourite,
  plus,
  back,
  email,
  phone,
  user,
  upload,
  clear
}

const Icon = ({ icon, sizeBox, onClick }) => {
  return (
    <img
      onClick={onClick}
      style={{ width: sizeBox, height: sizeBox, cursor: 'pointer' }}
      src={icons[icon]}
      alt={`icon-${icon}`} />
  )
}
export default Icon