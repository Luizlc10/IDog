import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import api from '../../services/api/index.js';

import './login.css';
class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errorText: '',
      isLoading: false,
      email: ''
    }
  }

  signup = async (e) => {
    this.setState({
      errorText: '',
      isLoading: true
    });
    e.preventDefault();

    try {
      const req = await api.post('/signup', {
        email: this.state.email
      })

      localStorage.setItem('token', req.data.user.token);

      this.props.history.push('/feed')
    } catch(error) {
      this.setState({
        errorText: error.response.data.error.message,
        isLoading: false
      })
    }
  }

  render() {
    return (
      <div className="login-component">
        <form className="card">
          <h1 className="login-component-title">login</h1>
          <input id="login-email"
            className="input-email"
            type="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })} />
          <button
            type="submit"
            id="login-submit"
            onClick={this.signup}
            className="btn shadow-1"
            >
            ENTRAR
          </button>
          {this.state.errorText === '' ? null : <p id="login-error-text">{this.state.errorText}</p>}
        </form>
      </div>
    )
  }
}

export const LoginComponent = withRouter(Login);
export default Login;
