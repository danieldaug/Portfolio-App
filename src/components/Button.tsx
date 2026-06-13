import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, size = 'medium', onClick }) => (
  <button className={`btn btn-${size}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
