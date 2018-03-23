import React, { Component } from 'react';
import { Accounts } from "meteor/accounts-base";

export default class LoginForm extends Component {
  login = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, (error) => {
      console.log(error);
    })
  }
  render() {
    return(
      <form onSubmit={this.login}>
      <input type="email" ref={(input) => (this.email = input)} id="email"/>
      <input type="password" ref={(input) => (this.password = input)} id="password"/>
      <button type="submit">Login</button>
    </form>
    )
  }
}