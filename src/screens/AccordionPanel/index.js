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

  inviteFriends = () => {
    console.log('inviteFriends: ');
  }

  render() {
    return (
      <div style={{padding: '0px 15px'}}>
        <div
          onClick={this.inviteFriends}
          onKeyPress={this.inviteFriends}
          style={{textDecoration:'underline',textAlign:'right'}}>
          邀请好友参加
        </div>
        <div style={{height:20}}></div>
        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="拓展管理 - 永久锁粉">
            <List className="my-list">
              <List.Item onClick={this.checkInvited}>
                <span style={{fontSize:12}}>查看受邀用户名单</span>
              </List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="推广运营活动" className="pad">
            <List.Item onClick={this.checkActivity} style={{fontSize:12}}>
              <span style={{fontSize:12}}>有奖推广活动1 (yy/mm/dd ~ yy/mm/dd)</span>
            </List.Item>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

export default withRouter(AccordionPanel);
