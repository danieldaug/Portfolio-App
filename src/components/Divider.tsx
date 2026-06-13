import React from 'react';
import './Divider.css';

interface DividerProps {
  color?: string;
  thickness?: string;
  width?: string;
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = ({
  color = 'var(--border)',
  thickness = '1px',
  width = '100%',
  style,
}) => (
  <hr
    className="divider"
    style={{ borderColor: color, borderTopWidth: thickness, width, ...style }}
  />
);

export default Divider;
