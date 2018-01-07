import React, { Component } from 'react';
import UserList from './containers/user-list';
import UserDetails from './containers/user-detail';
import Navbar from './components/navbar';
import Search from './components/search';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Search />
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
      </div>
    );
  }
}

export default App;
