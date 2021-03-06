import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class RegisterForm extends Component {
  registerUser = (e) => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value
      },
      (error) => {
        if (!error) {
          this.props.client.resetStore();
        }
        console.log(error);
      }
    );
  };
  render() {
    return (
      <form onSubmit={this.registerUser}>
        <h2>Register a new account</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            ref={(input) => (this.email = input)}
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            ref={(input) => (this.password = input)}
            id="password"
          />
        </div>
        <button type="submit">Register User</button>
      </form>
    );
  }
}
