import React from 'react';
import './Button.css';

const Button = ({ children, classnames, style }) => {
  return (
    <button style={style} className={`${classnames}`}>
      {children}
    </button>
  );
};

export default Button;
