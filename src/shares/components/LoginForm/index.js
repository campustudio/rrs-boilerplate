import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Card } from 'antd';
import apis from '@apis';

class LoginForm extends React.Component {
  state = {
    loading: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
          loading: true,
        });
        const loginedObj = await apis.login({
          phoneValue: values.username,
          codeValue: values.password,
        });
        console.log('loginedObj: ', loginedObj);

        if (loginedObj.status === 0) {
          localStorage.setItem('username', values.username);
          localStorage.setItem('token', loginedObj.meowToken);
          this.setState({
            loading: false,
          });
          this.props.history.push('/main');
        }
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { loading } = this.state;
    return (
      <Card
        title={<div style={{ textAlign: 'center' }}>管理系统登录</div>}
        bordered={false}
        style={{ margin: '20px 0px' }}
      >
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入账号!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入账号"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default withRouter(WrappedLoginForm);
