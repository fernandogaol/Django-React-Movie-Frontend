import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };
  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/movies';
    history.push(destination);
  };

  render() {
    return (
      <section className='LoginPage'>
        <div className='login-page'></div>

        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}
