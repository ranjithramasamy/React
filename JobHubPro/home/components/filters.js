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

      this.onSkillsSelectChange = this.onSkillsSelectChange.bind(this);
      this.clearSkillsSelected = this.clearSkillsSelected.bind(this);
      this.onAvailChkGrpChange = this.onAvailChkGrpChange.bind(this);
      this.clearAvailabilitySelected = this.clearAvailabilitySelected.bind(this);
      this.onJobTypeSelectChange = this.onJobTypeSelectChange.bind(this);
      this.clearJobTypeSelected = this.clearJobTypeSelected.bind(this);
      this.clearAllFiltersSelection = this.clearAllFiltersSelection.bind(this);
  }

  componentDidMount() {
      dataService.getJobTypes().then(data => this.setState({ jobTypes: data }));
      dataService.getSkills().then(data => this.setState({ skills: data }));
  }

  clearAllFiltersSelection() {
      this.criteria = {};
      this.setState({ skillsSelected: [], availabilitySelected: [], jobTypeSelected: [] });
      this.props.parentRef(this.criteria);
  }

  onSkillsSelectChange(value) {
    this.criteria.skills = value;
    this.setState({ skillsSelected: value });
    this.props.parentRef(this.criteria);
  }

  clearSkillsSelected() {
      this.criteria.skills = "";
      this.setState({ skillsSelected: [] });
      this.props.parentRef(this.criteria);
  }

  onAvailChkGrpChange(value) {
    this.criteria.availability = value;
    this.setState({ availabilitySelected: value });
    this.props.parentRef(this.criteria);
  }

  clearAvailabilitySelected() {
      this.criteria.availability = "";
      this.setState({ availabilitySelected: [] });
      this.props.parentRef(this.criteria);
  }

  onJobTypeSelectChange(value) {
    this.criteria.jobType = value;
    this.setState({ jobTypeSelected: value });
    this.props.parentRef(this.criteria)
  }

  clearJobTypeSelected() {
      this.criteria.jobType = "";
      this.setState({ jobTypeSelected: [] });
      this.props.parentRef(this.criteria);
  }

  render() {
    const { jobTypes, skills, jobTypeSelected, availabilitySelected, skillsSelected } = this.state;
    const availability = [
      { label: 'Hourly', value: '1' },
      { label: 'Part-time (20 hrs/wk)', value: '20' },
      { label: 'Part-time (40 hrs/wk)', value: '40' },
    ];

	return (
      <div>
        <Row>
            <Col span={17}><b>FILTERS</b></Col>
            <Col span={7} style={{float:'right'}}><a onClick={this.clearAllFiltersSelection}>Clear all filters</a></Col>
        </Row>
        <Divider />
        <Row>
            <Col span={21}><b>Skills</b></Col>
            <Col span={3} style={{float:'right'}}><a onClick={this.clearSkillsSelected}>Clear</a></Col>
        </Row>
        <Row>
            <Col span={24}>
                <Select mode="multiple" value={skillsSelected} size="large" placeholder="Please select your skills"
                    style={{ width: '100%' }} onChange={this.onSkillsSelectChange}>
                    { skills.map((item) => {
                        return <Option key={item.desc}>{item.desc}</Option>;
                    })}
                </Select>
            </Col>
        </Row><br/><br/>
        <Row>
            <Col span={21}><b>Availability </b><Tooltip title="Availability"><Icon type="info-circle" theme="outlined" /></Tooltip></Col>
            <Col span={3} style={{float:'right'}}><a onClick={this.clearAvailabilitySelected}>Clear</a></Col>
        </Row>
        <Row>
          <Col span={24}>
            <CheckboxGroup options={availability} value={availabilitySelected} style={{width: 200}} onChange={this.onAvailChkGrpChange} />
          </Col>
        </Row><br/><br/>
        <Row>
            <Col span={21}><b>Job Type </b><Tooltip title="Job type"><Icon type="info-circle" theme="outlined" /></Tooltip></Col>
            <Col span={3} style={{float:'right'}}><a onClick={this.clearJobTypeSelected}>Clear</a></Col>
        </Row>
        <Row>
          <Col span={24}>
            <Select size="large" value={jobTypeSelected} placeholder="Please select job type"
                style={{ width: '100%' }} onChange={this.onJobTypeSelectChange}>
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

export default Filters;