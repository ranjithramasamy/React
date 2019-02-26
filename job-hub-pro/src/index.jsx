import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './home/components/header/header.jsx';
import Content from './home/components/content.jsx';

import styles from './index.module.css';
import "./app.global.css";

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
