
import React from 'react';
import logo from '../assets/images/logo/logo-white.svg'

const Header = () => {
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="logo" />
    </header>
  )
}

export default Header;
