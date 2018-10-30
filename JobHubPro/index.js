import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './header.js';
import Content from './content.js';

import './index.css';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#F9F9F9', height: '100%'}}>
        <Header />
        <br/>
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
