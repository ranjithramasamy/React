import React, {Component} from 'react';
import {Menu, Icon} from 'antd';

import styles from "../../index.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      current: 'mail'
    }
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
        <Menu.Item key="logo">
          <span className={styles.headerLogo}> JobHub Pro</span>
        </Menu.Item>
        <Menu.Item className={styles.headerMenuAlignment} key="myaccount">
          <Icon type="user" theme="outlined"/> MY ACCOUNT
        </Menu.Item>
        <Menu.Item className={styles.headerMenuAlignment} key="search">
          SEARCH
        </Menu.Item>
        <Menu.Item className={styles.headerMenuAlignment} key="browse">
          BROWSE
        </Menu.Item>
        <Menu.Item className={styles.headerMenuAlignment} key="howitworks">
          HOW IT WORKS
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;