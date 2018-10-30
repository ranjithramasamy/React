import React, { Component } from 'react';
import { Row, Col, Input} from 'antd';

import Filters from './filters.js';
import SearchResults from './search-results.js';
import QuickAccess from './quick-access.js';

const Search = Input.Search;

class Content extends Component {
  constructor() {
	super();
  }

  onSearchHandler(searchText){
      console.log(searchText);
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
            <Col span={6}><Filters /></Col>
            <Col span={11}><SearchResults /></Col>
            <Col span={5}><QuickAccess /></Col>
            <Col span={1} />
          </Row>
      </div>
	);
  }
}

export default Content;