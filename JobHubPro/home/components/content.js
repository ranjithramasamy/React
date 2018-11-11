import React, { Component } from 'react';
import { Row, Col, Input} from 'antd';

import Filters from './filters.js';
import SearchResults from './search-results.js';
import QuickAccess from './quick-access.js';

import { dataService } from '../services/data-service';

const Search = Input.Search;

class Content extends Component {
  constructor(props) {
	super(props);
	this.searchResultsRef = React.createRef();
	this.applyFilters = this.applyFilters.bind(this);
  }

  applyFilters(criteria){
    dataService.searchJobs(criteria).then(data => this.searchResultsRef.current.refreshSearchResults(data));
  }

  onSearchHandler(searchText){
      console.log(searchText);
      this.applyFilters({keyword: searchText});
  }

  render() {
	return (
	  <div>
          <Row gutter={16}>
            <Col span={1} />
            <Col span={22}>
              <Search placeholder="Search by keywords (PHP, .NET, Graphic Design, etc..)" enterButton="Search"
                  size="large" onSearch={value => this.onSearchHandler(value)}/>
            </Col>
            <Col span={1} />
          </Row><br/>
          <Row gutter={16}>
            <Col span={1} />
            <Col span={6}><Filters parentRef={this.applyFilters} /></Col>
            <Col span={11}><SearchResults ref={this.searchResultsRef}/></Col>
            <Col span={5}><QuickAccess /></Col>
            <Col span={1} />
          </Row>
      </div>
	);
  }
}

export default Content;