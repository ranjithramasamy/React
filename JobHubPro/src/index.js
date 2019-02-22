import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './home/components/header.js';
import Content from './home/components/content.js';

import styles from './index.css';

class App extends Component {
  render() {
    return (
      <div className={styles.appBackground}>
        <Header />
        <br/>
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
