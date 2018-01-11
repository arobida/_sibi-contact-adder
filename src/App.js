import React, { Component } from 'react';
import './App.css';
import { Image } from 'semantic-ui-react';
import AddContact from './components/AddContact';
import sibi from './sibi.png';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  src={sibi} style={{width:'30%',margin:'8px'}} />
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
