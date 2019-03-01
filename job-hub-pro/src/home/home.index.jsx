import React, { Component } from 'react';

import Header from './components/header/header.jsx';
import Content from './components/content';

import styles from './home.module.css';

class HomeApp extends Component {
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

export default HomeApp;
