import React, { Component } from 'react';
import { Row, Col, Divider, Icon, Select, Checkbox, Tooltip } from 'antd';

import { dataService } from '../services/data-service';

const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

class Filters extends Component {
  constructor(props) {
      super(props);

      this.criteria = {};
      this.state = {
        jobTypes: [],
        skills: []
      };
  }

  componentDidMount() {
      dataService.getJobTypes().then(data => this.setState({ jobTypes: data }));
      dataService.getSkills().then(data => this.setState({ skills: data }));
  }

  onSkillsSelectChange(value) {
    this.criteria.skills = value;
    this.props.parentRef(this.criteria)
  }

  onAvailChkGrpChange(values) {
    console.log('checked = ', values);

    this.criteria.availability = values;
    this.props.parentRef(this.criteria)
  }

  onJobTypeSelectChange(value) {
    console.log(`selected ${value}`);

    this.criteria.jobType = value;
    this.props.parentRef(this.criteria)
  }

  render() {
    const { jobTypes, skills } = this.state;
    const availability = [
      { label: 'Hourly', value: '1' },
      { label: 'Part-time (20 hrs/wk)', value: '20' },
      { label: 'Part-time (40 hrs/wk)', value: '40' },
    ];

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
                    { skills.map((item) => {
                            return <Option key={item.desc}>{item.desc}</Option>;
                    })}
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
                { jobTypes.map((item) => {
                        return <Option key={item.id}>{item.jobType}</Option>;
                })}
            </Select>
          </Col>
        </Row>
      </div>
	);
  }
}

function updateStateData(data) {
    this.setState(data)
}

export default Filters;