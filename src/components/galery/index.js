import React, { Component } from 'react';

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
              <li key={i}>{item}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
