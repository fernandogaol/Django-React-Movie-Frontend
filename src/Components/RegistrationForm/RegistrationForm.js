import React, { Component } from 'react';
import { Input, Button } from '../Utils/Utils';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
  render() {
    return (
      <form className='RegistrationForm' onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        {/* <div role='alert'>{error && <p className='red'>{error}</p>}</div> */}
        <div className='full_name'>
          <Input
            name='full_name'
            placeholder='Enter full name'
            type='text'
            id='RegistrationForm__full_name'
          ></Input>
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm__email'></label>
          <Input
            name='email'
            type='text'
            id='RegistrationForm__email'
            placeholder='Enter email'
          ></Input>
        </div>
        <div className='password'>
          <Input
            name='password'
            placeholder='Enter password'
            type='password'
            id='RegistrationForm__password'
          ></Input>
        </div>
        <Button className='register-button' type='submit'>
          Register
        </Button>
      </form>
    );
  }
}
