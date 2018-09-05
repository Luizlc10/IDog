import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

export default class Menu extends Component {

  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <Link to={{
                pathname: '/feed',
                search: '?category=husky',
              }}
              className="Link"
            >
              Husky
            </Link>
          </li>
          <li>
            <Link to={{
                pathname: '/feed',
                search: '?category=labrador',
              }}
              className="Link"
            >
              labrador
            </Link>
          </li>
          <li>
            <Link to={{
                pathname: '/feed',
                search: '?category=hound',
              }}
              className="Link"
            >
              Hound
            </Link>
          </li>
          <li>
            <Link to={{
                pathname: '/feed',
                search: '?category=pug',
              }}
              className="Link"
            >
              Pug
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
