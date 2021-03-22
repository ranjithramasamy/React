import React, {Component} from 'react';
import {Menu, Icon} from 'antd';

import styles from "./header.module.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      current: 'mail'
    }
  }

  render() {
    return (
      <Menu mode="horizontal" selectedKeys={[this.state.current]}>
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
