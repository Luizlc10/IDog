import React, { Component } from 'react';

import './galery.css';

import Cell from '../cell';
export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="galery">
        <ul>
          {this.props.list.map((item, i) => {
            return(
              <li key={i}><Cell item={item}/></li>
            )
          })}
        </ul>
      </div>
    )
  }
}
