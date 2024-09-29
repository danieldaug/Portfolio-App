// components/Divider.tsx
import React from 'react';
import './Divider.css';

interface DividerProps {
  color?: string;
  thickness?: string;
  width?: string;
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = ({ color = '#000', thickness = '1px', width = '100%', style }) => {
  return (
    <hr 
      className="divider" 
      style={{ 
        borderColor: color, 
        borderWidth: thickness, 
        width: width, 
        ...style 
      }} 
    />
  );
};

export default Divider;
