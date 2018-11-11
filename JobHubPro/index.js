import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './home/components/header.js';
import Content from './home/components/content.js';

import './index.css';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#F9F9F9'}}>
        <Header />
        <br/>
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
