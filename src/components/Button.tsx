// Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ text, size = 'large' }) => (
  <div className="buttonborder">
    <button className={`button button-${size}`}>{text}</button>
  </div>
);

export default Button;
