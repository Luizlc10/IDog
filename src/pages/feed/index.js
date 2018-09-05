import React, { Component } from 'react';

import './feed.css'

import api from '../../services/api';

import Menu from '../../components/menu';
import Galery from '../../components/galery';
export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBeed: this.props.location.search,
      isLoading: false
    }
  }

  componentDidMount() {
    console.log(this.props.location.search)
    this.getDogs('husky');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.updateBeed(this.props.location.search);
    }
  }

  updateBeed = bead => {
    bead = bead.split('=')[1];
    switch (bead) {
      case 'husky':
        this.getDogs(bead);
        break;
      case 'labrador':
        this.getDogs(bead);
        break;
      case 'hound':
        this.getDogs(bead);
        break;
      case 'pug':
        this.getDogs(bead);
        break;
      default:
        this.getDogs('husky');
    }
  }

  getDogs = async (beed) => {
    try {
      this.setState({
        isLoading: true,
        errorText: ''
      });

      const token = await localStorage.getItem('token');
      const req = await api.get(`/feed?category=${beed}`, {
        headers: {
          Authorization: token,
        },
      });

      this.setState({
        data: req.data,
        isLoading: false
      });

    } catch (error) {
      this.setState({
        errorText: error.response.data.error.message,
        isLoading: false,
      });
    }
  }

  render() {
    return (
      <div className="feed-page">
        <h1 className="feed-page-title">IDog</h1>
        <Menu onChange={this.updateBeed}/>
        {!this.state.data ? 'loading...' : <Galery list={this.state.data.list}/>}
      </div>
    )
  }
}
