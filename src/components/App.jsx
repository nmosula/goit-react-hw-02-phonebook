import React, { Component } from 'react';

import UserForm from './UserForm';
import UserList from './UserList';
import Layout from './Layout';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };


  render() {
    return (
      <Layout>
        <UserForm onSave={this.addContact} />
        <UserList items={this.state.contacts} />
      </Layout>
    );
  }
}