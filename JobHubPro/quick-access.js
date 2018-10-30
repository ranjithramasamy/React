import React, { Component } from 'react';
import { Card } from 'antd';

class QuickAccess extends Component {
  constructor() {
	super();
  }

  render() {
	return (
      <Card style={{ width: '100%', height: 275 }}>
          <p>Quick Access</p>
      </Card>
	);
  }
}

export default QuickAccess;