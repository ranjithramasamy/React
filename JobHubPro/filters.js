import React, { Component } from 'react';
import { Row, Col, Divider, Icon, Select, Checkbox, Tooltip } from 'antd';

const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const skillsOpt = [];

skillsOpt.push(<Option key='java'>Java</Option>);
skillsOpt.push(<Option key='php'>PHP</Option>);
skillsOpt.push(<Option key='ui'>UI</Option>);
skillsOpt.push(<Option key='mobile'>Mobile</Option>);
skillsOpt.push(<Option key='dotnet'>.Net</Option>);
skillsOpt.push(<Option key='bigdata'>BigData</Option>);
skillsOpt.push(<Option key='datascience'>Data Science</Option>);
skillsOpt.push(<Option key='python'>Python</Option>);

const availability = [
  { label: 'Hourly', value: 'hourly' },
  { label: 'Part-time (20 hrs/wk)', value: 'part20' },
  { label: 'Part-time (40 hrs/wk)', value: 'part40' },
];

const jobTypeOpt = [];

jobTypeOpt.push(<Option key='softeng'>Software Engineer</Option>);
jobTypeOpt.push(<Option key='techlead'>Technical Lead</Option>);
jobTypeOpt.push(<Option key='prgmgmt'>Program Management</Option>);
jobTypeOpt.push(<Option key='plead'>Project Lead</Option>);
jobTypeOpt.push(<Option key='autoqa'>QA Automation</Option>);

class Filters extends Component {
  constructor() {
  	super();
  }

  onSkillsSelectChange(value) {
    console.log(`selected ${value}`);
  }

  onAvailChkGrpChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  onJobTypeSelectChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
	return (
      <div>
        <Row>
            <Col span={17}><b>FILTERS</b></Col>
            <Col span={7} style={{float:'right'}}><a>Clear all filters</a></Col>
        </Row>
        <Divider />
        <Row>
            <Col span={21}><b>Skills</b></Col>
            <Col span={3} style={{float:'right'}}><a>Clear</a></Col>
        </Row>
        <Row>
            <Col span={24}>
                <Select mode="multiple" size="large" placeholder="Please select your skills"
                    style={{ width: '100%' }} onChange={value => this.onSkillsSelectChange(value)}>
                    { skillsOpt }
                </Select>
            </Col>
        </Row><br/><br/>
        <Row>
            <Col span={21}><b>Availability </b><Tooltip title="Availability"><Icon type="info-circle" theme="outlined" /></Tooltip></Col>
            <Col span={3} style={{float:'right'}}><a>Clear</a></Col>
        </Row>
        <Row>
          <Col span={24}>
            <CheckboxGroup options={ availability } style={{width: 200}} onChange={value => this.onAvailChkGrpChange(value)} />
          </Col>
        </Row><br/><br/>
        <Row>
            <Col span={21}><b>Job Type </b><Tooltip title="Job type"><Icon type="info-circle" theme="outlined" /></Tooltip></Col>
            <Col span={3} style={{float:'right'}}><a>Clear</a></Col>
        </Row>
        <Row>
          <Col span={24}>
            <Select size="large" placeholder="Please select job type"
                style={{ width: '100%' }} onChange={value => this.onJobTypeSelectChange(value)}>
                { jobTypeOpt }
            </Select>
          </Col>
        </Row>
      </div>
	);
  }
}

export default Filters;