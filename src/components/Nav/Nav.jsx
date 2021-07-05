import React from 'react';
import logo from '../../assets/logo.png';
import './Nav.css';
import Button from '../Button';

const Nav = () => {
  return (
    <nav>
      <img src={logo} />
      <div className="nav__item">
        <Button classnames="bg-main">Notify Me</Button>
        <Button classnames="bd-alt color-alt">Coming Soon</Button>
      </div>
    </nav>
  );
};

export default Nav;
