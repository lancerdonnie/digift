import React from 'react';
import './Button.css';

const Button = ({ children, classnames }) => {
  return <button className={`${classnames}`}>{children}</button>;
};

export default Button;
