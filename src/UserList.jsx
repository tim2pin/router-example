import React,{ Component } from 'react';
import UserItem from './UserItem.jsx';


export default class UserList extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <UserItem />
        <UserItem />
      </div>
    );
  }
}