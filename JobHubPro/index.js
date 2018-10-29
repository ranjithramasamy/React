import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Menu, Icon, Avatar } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <span style={{ color: '#87d068', fontWeight: 'bold', fontSize: '18px'}}> JobHub Pro</span>
        <Menu.Item style={ {float:'right'} } key="myaccount">
          <Icon type="user" theme="outlined" />MY ACCOUNT
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

ReactDOM.render(<App />, document.getElementById('root'));
