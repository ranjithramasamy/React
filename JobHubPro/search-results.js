import React, { Component } from 'react';
import { Card, Select } from 'antd';

import JDWizard from './jd-wizard.js';

const Option = Select.Option;

const sortByOpt = [];

sortByOpt.push(<Option key='relevance'>Relevance</Option>);
sortByOpt.push(<Option key='posteddt'>Posted Date</Option>);
sortByOpt.push(<Option key='hprice'>Hourly Price</Option>);

const result = {
    total: 16,
    jobs: [{
        title: "Senior PHP Developer",
        availability: "hourly",
        location: "Chennai, IND",
        price: "$78 / hr",
        description: "Software Engineer, with the hard core Java skills, strong experience in Node.js, Reach.js, angular.js technologies. The candidate must have complete understanding with hands-on experience in architecture, design, coding and testing aspect of both front end and backend services.",
        rating: "82%",
        tags: ["Java", "UX", "Android", "Javascript"]
    },
    {
        title: "Lead Java Developer",
        availability: "part-time",
        location: "Bangalore, IND",
        price: "$55 / hr",
        description: "Software Engineer, with the hard core Java skills, strong experience in Node.js, Reach.js, angular.js technologies. The candidate must have complete understanding with hands-on experience in architecture, design, coding and testing aspect of both front end and backend services.",
        rating: "76%",
        tags: ["Java", "J2EE", "Web", "Javascript"]
    }]
};

class SearchResults extends Component {
  constructor() {
	super();
  }

  onSortByFilterChange(value) {
      console.log(`selected ${value}`);
  }

  render() {
	return (
      <Card style={{ width: '100%'}}>
        <p>
            <b>RESULTS ({result.total})</b>
            <span style={{ float:'right' }}>
                Sort By &nbsp;&nbsp;
                <Select placeholder="Sort by"
                    style={{ width: 150 }} onChange={value => this.onSortByFilterChange(value)}>
                    { sortByOpt }
                </Select>
            </span>
        </p><br/>
        <JDWizard data= {result.jobs[0]}/><br/>
        <JDWizard data= {result.jobs[1]}/>
      </Card>
	);
  }
}

export default SearchResults;