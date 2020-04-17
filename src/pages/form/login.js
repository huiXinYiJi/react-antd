import React, { Component } from 'react'
import { Card, Form, Input, Button } from 'antd'

const FormItem = Form.Item

export default class FormLogin extends Component {

  validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: '${name} is required!'
  }
  initialValues = {
    username: 'admin',
    password: '123'
  }
  handleValueChange = (changeValues, allValues) => {
    // console.log(changeValues, allValues)
  }
  onFinish = values => {
    console.log('Success:', values);
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
            name="formValue"
            onValuesChange={this.handleValueChange}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            validateMessages={this.validateMessages}
            initialValues={this.initialValues}
          >
            <FormItem name="username"
              rules={[
                { required: true }
              ]}
            >
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem name="password"
              rules={[
                { required: true }
              ]}
            >
              <Input.Password placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}