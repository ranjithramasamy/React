import React, {Component} from 'react';
import {Card, Select, Spin, message} from 'antd';

import JDWizard from './jd-wizard.jsx';
import {dataService} from '../services/data-service';
import {MESSAGE_CONSTANTS} from '../../global.constants';

const Option = Select.Option;

class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      result: {
        total: 0,
        jobsList: []
      }
    };

    this.onSortByFilterChange = this.onSortByFilterChange.bind(this);
    this.refreshSearchResults = this.refreshSearchResults.bind(this);
    this.onErrorHandler = this.onErrorHandler.bind(this);
  }

  componentDidMount() {
    this.refreshSearchResults({});
  }

  onSortByFilterChange(key) {
    this.refreshSearchResults({sortby: key});
  }

  refreshSearchResults(criteria) {
    this.setState({loading: true});

    dataService.searchJobs(criteria).then(data => {
      this.setState({result: data, loading: false});
    }).catch(this.onErrorHandler);
  }

  onErrorHandler() {
    this.setState({loading: false});
    message.error(MESSAGE_CONSTANTS.SERVICE_FAILURE);
  }

  render() {
    const {result, loading} = this.state;
    const sortByOpt = [];

    sortByOpt.push(<Option key='postedOn'>Posted Date</Option>);
    sortByOpt.push(<Option key='wagePerHour'>Hourly Price</Option>);

    return (
      <Spin spinning={loading}>
        <Card style={{width: '100%'}}>
          <p>
            <b>RESULTS ({result.total})</b>
            <span style={{float: 'right'}}>
                    Sort By &nbsp;&nbsp;
              <Select placeholder="Sort by"
                      style={{width: 150}} onChange={value => this.onSortByFilterChange(value)}>
                        {sortByOpt}
                    </Select>
                </span>
          </p><br/>
          {result.jobsList.map((item, index) => {
            return <p key={index}><JDWizard data={item}/><br/></p>;
          })}
        </Card>
      </Spin>
    );
  }
}

export default SearchResults;