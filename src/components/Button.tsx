// Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => (
  <div className="buttonborder">
    <button className="button">{text}</button>
  </div>
);

export default Button;
