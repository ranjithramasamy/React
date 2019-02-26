import React, {Component} from 'react';
import {Row, Col, Input} from 'antd';

import Filters from './filters.jsx';
import SearchResults from './search-results.jsx';
import QuickAccess from './quick-access.jsx';

const Search = Input.Search;

class Content extends Component {
  constructor(props) {
    super(props);
    this.searchResultsRef = React.createRef();
    this.applyFilters = this.applyFilters.bind(this);
  }

  applyFilters(criteria) {
    this.searchResultsRef.current.refreshSearchResults(criteria);
  }

  onSearchHandler(searchText) {
    this.applyFilters({keyword: searchText});
  }

  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={1}/>
          <Col span={22}>
            <Search placeholder="Search by keywords (PHP, .NET, Graphic Design, etc..)" enterButton="Search"
                    size="large" onSearch={value => this.onSearchHandler(value)}/>
          </Col>
          <Col span={1}/>
        </Row><br/>
        <Row gutter={16}>
          <Col span={1}/>
          <Col span={6}><Filters parentRef={this.applyFilters}/></Col>
          <Col span={11}><SearchResults ref={this.searchResultsRef}/></Col>
          <Col span={5}><QuickAccess/></Col>
          <Col span={1}/>
        </Row>
      </div>
    );
  }
}

export default Content;