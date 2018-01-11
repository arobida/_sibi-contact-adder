import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import AddContact from './components/AddContact';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sibi Contact Form</h1>
        </header>
        <div id="formBox">
          <AddContact/>
        </div>  
      </div>
    );
  }
}

export default App;
