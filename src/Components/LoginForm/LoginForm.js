import React, { Component } from 'react';
// import TokenService from '../../services/token-service';
// import AuthApiService from '../../services/auth-api-service';
// import UserContext from '../../context/ApiContext';
import { Button, Input } from '../Utils/Utils';

import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  render() {
    return (
      <div className='login-wrapper'>
        <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
          <h1>Log In</h1>
          <div role='alert'>
            {/* {error && <p className='login-error'>{error}</p>} */}
          </div>
          <div className='email'>
            <Input
              required
              name='email'
              id='LoginForm__email'
              placeholder='Enter email'
            ></Input>
          </div>
          <div className='password'>
            <Input
              required
              name='password'
              type='password'
              placeholder='Enter password'
              id='LoginForm__password'
            ></Input>
          </div>
          <Button type='submit'>Login</Button>
        </form>
      </div>
    );
  }
}
