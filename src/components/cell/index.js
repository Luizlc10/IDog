import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { GetUrlVars } from '../../utils/index';

import './cell.css';
class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vars: GetUrlVars()
    }
  }

  componentDidMount() {
    this.setState({
      vars: {
        category: this.getId()[7].split('/')[3],
        id: this.getId()[8].split('.')[0]
      },
    });
  }

  getId = () => {
    return this.props.item.match(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)(:([^\/]*))?((\/[\w\/-]+)*\/)([\w\-\.]+[^#?\s]+)(\?([^#]*))?(#(.*))?$/i);
  }

  render() {
    return (
      <Link
        className="cell"
          to={{
          pathname: '/feed',
            search: `?category=${this.getId()[7].split('/')[3]}&id=${this.getId()[8].split('.')[0]}`,
        }}
      >
        <div
          className="card"
          style={{
            backgroundImage: `url(${this.props.item})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
      </Link>
    )
  }
}

export default Cell;
