import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Accordion, List } from 'antd-mobile';

class AccordionPanel extends Component {
  onChange = (key) => {
    console.log(key);
  }

  checkInvited = () => {
    this.props.history.push('/main/invited-users');
  }

  checkActivity = () => {
    this.props.history.push('/main/award-activity');
  }

  render() {
    return (
      <div>
        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="拓展管理 - 永久锁粉">
            <List className="my-list">
              <List.Item onClick={this.checkInvited}>查看受邀用户名单</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="推广运营活动" className="pad">
            <List.Item onClick={this.checkActivity}>有奖推广活动1 (yy/mm/dd ~ yy/mm/dd)</List.Item>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

export default withRouter(AccordionPanel);
