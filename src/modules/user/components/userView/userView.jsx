import React, {Component} from 'react';

import UsersList from "./components/usersListBlock/usersListBlock";
import {AddUserBlock} from "./components/addUserBlock";

import '../../../../app/app.module.scss';

export default class Index extends Component{
  render() {
    return (
      <div className="App">
        <AddUserBlock onAddUser={this.props.addUser}/>
        <UsersList users={this.props.users} onDeleteUser={this.props.deleteUser}/>
      </div>
    );
  }
}
