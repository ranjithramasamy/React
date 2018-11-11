import React, { Component } from 'react';
import { Menu, Icon} from 'antd';

class Header extends Component {
  state = {
	  current: 'mail',
  }

  constructor() {
	super();
  }

  handleClick = (e) => {
	  console.log('click ', e);

	  this.setState({
		current: e.key,
	  });
  }

  render() {
	return (
      <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
          <Menu.Item key="logo">
              <span style={{color: '#87d068', fontWeight: 'bold', fontSize: '18px'}}> JobHub Pro</span>
          </Menu.Item>
          <Menu.Item style={ {float:'right'} } key="myaccount">
            <Icon type="user" theme="outlined" /> MY ACCOUNT
          </Menu.Item>
          <Menu.Item style={ {float:'right'} } key="search">
            SEARCH
          </Menu.Item>
          <Menu.Item style={ {float:'right'} } key="browse">
            BROWSE
          </Menu.Item>
          <Menu.Item style={ {float:'right'} } key="howitworks">
            HOW IT WORKS
          </Menu.Item>
      </Menu>
	);
  }
}

export default Header;