import React, { Component } from 'react'
import { Card, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const FormItem = Form.Item

export default class FormLogin extends Component {

  formRef = React.createRef()

  validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: '${name} is required!'
  }
  initialValues = {
    username: 'admin',
    password: '123',
    remember: false
  }
  handleValueChange = (changeValues, allValues) => {
    // console.log(changeValues, allValues)
  }
  onFinish = values => {
    console.log('Success:', values);
    console.log('getFieldsValue', this.formRef.current.getFieldsValue(['username']))
  }
  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }

  render() {
    return (
      <div className="content-wrap">
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input.Password placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单horizontal" style={{marginTop: 10}}>
          <Form style={{width: 300}}
            ref={this.formRef}
            name="formValue"
            onValuesChange={this.handleValueChange}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            validateMessages={this.validateMessages}
            initialValues={this.initialValues}
          >
            {/* 用户名 */}
            <FormItem name="username"
              rules={[
                { required: true },
                { max: 10, min: 5, message: '长度不在范围内'},
                { pattern: new RegExp('^\\w+$', 'g'), message: '用户需为字母和数字下划线'}
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
            </FormItem>
            {/* 密码 */}
            <FormItem name="password"
              rules={[
                { required: true }
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
            </FormItem>
            {/* 确认密码 */}
            <FormItem name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                })
              ]}
            >
              <Input.Password placeholder="请输入密码" />
            </FormItem>
            {/* 记住密码 */}
            <FormItem>
              <FormItem name="remember" valuePropName="checked" noStyle
                rules={[
                  { required: true, message: '请选择记住密码' }
                ]}
              >
                <Checkbox>Remember me</Checkbox>
              </FormItem>
              <a href="/" style={{float: 'right'}}>记住密码</a>
            </FormItem>
            <FormItem>
              <Button block type="primary" htmlType="submit">登录</Button>
              <Button block type="primary" htmlType="button" onClick={() => this.formRef.current.resetFields()}>清除数据</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}