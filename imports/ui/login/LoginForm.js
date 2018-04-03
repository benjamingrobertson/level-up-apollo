import React, { Component } from 'react';
import { Accounts } from "meteor/accounts-base";

export default class LoginForm extends Component {
  login = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, (error) => {
      if (!error) {
        this.props.client.resetStore();
      }
      console.log(error);
    })
  }
  render() {
    return (
      <form onSubmit={this.login}>
        <input type="email" ref={(input) => (this.email = input)} id="email" autoComplete="email"/>
        <input type="password" ref={(input) => (this.password = input)} id="password" autoComplete="current-password" />
        <button type="submit">Login</button>
      </form>
    )
  }
}