import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}
from 'react-router-dom';
import './App.css';
import { Image } from 'semantic-ui-react';
import AddContact from './components/AddContact';
import sibi from './sibi.png';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  }
  componentDidMount() {
    this.getContacts();
  }
  getContacts() {
    axios.get('*')
      .then((res) => {
        this.setState({
          data: res
        });
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    this.getContacts();
    return (
      <div className="App">
        <header className="App-header">
          <img  src={sibi} style={{width:'30%',margin:'8px'}} />
          <h1 className="App-title">Sibi Contact Form</h1>
        </header>
        <div id="formBox">
          <p style={{color:'black'}}>{this.state.data}</p>
          <AddContact/>
        </div>  
      </div>
    );
  }
}

export default App;
