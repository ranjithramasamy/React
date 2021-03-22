import React, {Component} from 'react';
import {Row, Col, Divider, Card, Icon} from 'antd';

const {Meta} = Card;

class QuickAccess extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Card style={{width: '100%'}}
                  cover={<img alt="example"
                              src="http://www.managingamericans.com/pub/images/20140129163952_ThreeEffectiveOnlineJobSearchStrategies.jpg"/>}
                  actions={[<Icon key="login" type="login"/>, <Icon key="wechat" type="wechat"/>, <Icon key="edit" type="edit"/>]}>

              <Meta title="JobHub Pro" description="Pay only for the hours worked"/>
            </Card>
          </Col>
        </Row><br/><br/>
        <Row>
          <Col span={8}><b>TOP JOBS</b></Col>
        </Row>
        <Divider/>
        <Row>
          <Col span={18}>Lead UI Angular 2/4/5</Col>
          <Col span={6}>$102/hr</Col>
        </Row>
        <Row>
          <Col span={18}>Senior Java Developer</Col>
          <Col span={6}>$84/hr</Col>
        </Row>
        <Row>
          <Col span={18}>Bigdata Analytics</Col>
          <Col span={6}>$79/hr</Col>
        </Row>
      </div>
    );
  }
}

export default QuickAccess;