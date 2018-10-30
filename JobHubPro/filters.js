import React, { Component } from 'react';
import { Row, Col, Divider, Select } from 'antd';

class Filters extends Component {
  constructor() {
  	super();
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
	return (
      <div>
        <Row>
            <Col span={8}><b>FILTERS</b></Col>
            <Col span={8} style={{float:'right'}}><a>Clear all filters</a></Col>
        </Row>
        <Divider />
        <Row>
            <Col span={24}>
                <Select mode="multiple" size="large" style={{ width: '100%', height: '200px' }}
                    placeholder="Please select" onChange={value => this.handleChange(value)}></Select>
            </Col>
        </Row>
      </div>
	);
  }
}

export default Filters;