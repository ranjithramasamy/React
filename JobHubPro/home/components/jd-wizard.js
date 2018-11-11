import React, { Component } from 'react';
import { Card, Badge, Icon } from 'antd';

class JDWizard extends Component {
  constructor() {
	super();
  }

  render() {
	return (
      <Card style={{ width: '100%'}}>
          <p><b>{this.props.data.jobType}</b> <Badge count={this.props.data.availability} style={{ backgroundColor: '#52c41a' }}></Badge><span style={{float:'right'}}>${this.props.data.wagePerHour} / hr</span></p>
          <p><Icon type="pushpin" theme="twoTone" twoToneColor="#52c41a" />{this.props.data.employer}, {this.props.data.jobLocation}</p>
          <p>Reply Rate: <b>{this.props.data.rating}%</b></p>
          <p>{this.props.data.jobDesc}</p>
          <p>
          { this.props.data.tags.map((tag) => {
               return <span><Badge count={tag} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}></Badge>&nbsp;</span>
          })}
          </p>
      </Card>
	);
  }
}

export default JDWizard;