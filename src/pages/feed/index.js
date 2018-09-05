import React, { Component } from 'react';

import './feed.css'

import { GetUrlVars } from '../../utils';
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
    this.getDogs('husky');
    this.updateVars();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.updateVars();
      this.updateBeed();
    }
  }

  updateVars = () => {
    this.setState({ vars: GetUrlVars() });
  }

  updateBeed = () => {
    let { category } = GetUrlVars();
    switch (category) {
      case 'husky':
        this.getDogs(category);
        break;
      case 'labrador':
        this.getDogs(category);
        break;
      case 'hound':
        this.getDogs(category);
        break;
      case 'pug':
        this.getDogs(category);
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
        <Menu />
        {!this.state.data ? 'loading...' : <Galery list={this.state.data.list}/>}
      </div>
    )
  }
}
