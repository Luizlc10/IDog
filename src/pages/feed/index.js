import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './feed.css'

import { GetUrlVars } from '../../utils';
import api from '../../services/api';

import Menu from '../../components/menu';
import Galery from '../../components/galery';
import Modal from '../../components/modal';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      vars: {
        category: '',
        id: ''
      }
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
      case 'hound-english':
        this.getDogs('hound');
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
        isLoading: false
      });
    }
  }

  logout() {
    localStorage.clear();
  }

  render() {
    return <div className="feed-page">
        {!this.state.vars.id ? null : <Modal vars={this.state.vars} />}
        <h1 className="feed-page-title">IDog</h1>
        <Link to="/" onClick={this.logout} className="feed-page-logout">sair</Link>
        <Menu />
        {!this.state.data ?
          <div className="loading">
            <h1>loading...</h1>
          </div>
          :
          <Galery list={this.state.data.list} />}
      </div>;
  }
}

export default Feed;
