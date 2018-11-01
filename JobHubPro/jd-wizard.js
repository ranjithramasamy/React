import React, { Component } from 'react';
import { Card, Badge, Icon } from 'antd';

class JDWizard extends Component {
  constructor() {
	super();
  }

  render() {
	return (
      <Card style={{ width: '100%'}}>
          <p><b>{this.props.data.title}</b> <Badge count={this.props.data.availability} style={{ backgroundColor: '#52c41a' }}></Badge><span style={{float:'right'}}>$44 / hr</span></p>
          <p><Icon type="pushpin" theme="twoTone" twoToneColor="#52c41a" /> {this.props.data.location}</p>
          <p>Reply Rate: <b>{this.props.data.rating}</b></p>
          <p>{this.props.data.description}</p>
          <p>
            <Badge count={"PHP"} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}></Badge>&nbsp;
            <Badge count={"Mobile"} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}></Badge>&nbsp;
            <Badge count={"Javascript"} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}></Badge>&nbsp;
          </p>
      </Card>
	);
  }
}

export default JDWizard;