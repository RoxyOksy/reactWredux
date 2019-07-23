import React, {Component} from 'react';

import {UserView} from "../components/userView";

import '../../../app/app.module.scss';

export default class Index extends Component{
  state = {
    users: []
  };

  maxId = 1;

  addUser = () => {
    const newUser = {id: this.maxId++};

    this.setState(({users}) => {
      return{
        users: [...users, newUser]
      }
    });
  };

  deleteUser = (id) => {
    this.setState(({users}) => {
      const index = users.findIndex((el) => el.id === id);
      const newState = [...users.slice(0, index), ...users.slice(index + 1)];

      return {
        users: newState
      }
    });
  };

  render() {
    return (
      <UserView users={this.state.users} addUser={this.addUser} deleteUser={this.deleteUser} />
    );
  }
}
