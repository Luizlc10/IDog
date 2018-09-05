import React from 'react';
import { Link } from 'react-router-dom';

import './cell.css';
const Cell = props => (
  <Link
    className="cell"
      to={{
      pathname: '/feed/',
      search: '?category=husky',
    }}
  >
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.item})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    />
  </Link>
);

export default Cell;
