import React, { Component } from 'react';
import { Card, Select } from 'antd';

import JDWizard from './jd-wizard.js';
import { dataService } from '../services/data-service';

const Option = Select.Option;

class SearchResults extends Component {
  constructor() {
	super();

	this.state = {
        result: {
            total: 0,
            jobsList: []
        }
    };
  }

  componentDidMount() {
      dataService.searchJobs({}).then(data => this.setState({ result: data }));
  }

  refreshSearchResults(data){
    this.setState({ result: data });
  }

  onSortByFilterChange(key) {
      dataService.searchJobs({sortby: key}).then(data => this.setState({ result: data }));
  }

  render() {
    const { result } = this.state;
    const sortByOpt = [];

    sortByOpt.push(<Option key='postedOn'>Posted Date</Option>);
    sortByOpt.push(<Option key='wagePerHour'>Hourly Price</Option>);

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
        { result.jobsList.map((item) => {
            return <p><JDWizard data= {item}/><br/></p>;
        })}
      </Card>
	);
  }
}

export default SearchResults;