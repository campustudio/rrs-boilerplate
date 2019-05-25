import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Tabs, WhiteSpace, WingBlank } from 'antd-mobile';
import H5NavBar from '@h5components/H5NavBar';
import AccordionPanel from '../AccordionPanel';
import '../screen.less';
import './index.less';
import ActivityInfoCard from '@h5components/ActivityInfoCard';
import Award from '@screens/Award';
import Strategy from '@screens/Strategy';

const tabs = [
  { title: '奖励' },
  { title: '攻略' },
];

export default class AwardActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <H5NavBar text="推广运营活动"/>
        <div className="content-container">
          <ActivityInfoCard>
            <Card>
              <Card.Header
                title="有奖推广活动 第一期"
              />
              <Card.Body>
                <div>本期活动：yy/mm/dd ~ yy/mm/dd</div>
              </Card.Body>
            </Card>
          </ActivityInfoCard>
          <ActivityInfoCard>
            <Card>
              <Card.Header
                title="活动排名"
              />
              <Card.Body>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{`贡献值：${9000}`}</span>
                  <span>{`排名：${90}`}</span>
                </div>
              </Card.Body>
              <Card.Footer extra={<div>活动平级：<span style={{ color: 'red', fontSize: 20 }}>AA</span></div>} />
            </Card>
          </ActivityInfoCard>
          <WingBlank size="lg">
            <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
              <div className="tab-item">
                <Award />
              </div>
              <div className="tab-item">
                <Strategy />
              </div>
            </Tabs>
          </WingBlank>
        </div>
      </div>
    );
  }
}
