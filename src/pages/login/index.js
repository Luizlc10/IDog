import React, { Component } from 'react';

import LoginComponent from '../../components/login';

import './login.css'
export default class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div>
          <h1 className="login-title">IDog</h1>
          <LoginComponent />
        </div>
      </div>
    )
  }
}
