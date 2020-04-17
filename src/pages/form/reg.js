import React, { Component } from 'react'
import { Card, Form, Input, Button, Radio, InputNumber, Select } from 'antd'

const FormItem = Form.Item

export default class Reg extends Component {

  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
  }

  optionsRadio = [
    { label: '男', value: '1' },
    { label: '女', value: '2' },
    { label: '其他', value: '3' },
  ]

  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed= errorInfo => {
    console.log('Failed:', errorInfo.values)
  }

  render() {
    return (
      <div className="content-wrap">
        <Card title="注册表单">
          <Form
            layout="horizontal"
            { ... this.formItemLayout }
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <FormItem label="用户名" name="username"
              rules={[
                { required: true, message: '请输入用户名' }
              ]}>
              <Input placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem label="密码" name="password"
              rules={[
                { required: true, message: '请输入密码' }
              ]}>
              <Input.Password placeholder="请输入密码"></Input.Password>
            </FormItem>
            <FormItem label="性别" name="gender"
              rules={[
                { required: true, message: '请选择性别' }
              ]}>
              <Radio.Group
                options={this.optionsRadio}
              />
            </FormItem>
            <FormItem label="年龄" name="age"
              rules={[
                { required: true, message: '请输入年龄' }
              ]}>
              <InputNumber></InputNumber>
            </FormItem>
            <FormItem label="当前状态" name="state"
              rules={[
                { required: true, message: '请选择当前状态' }
              ]}>
              <Select>
                <Select.Option value="1">咸鱼一条</Select.Option>
                <Select.Option value="2">北大才子</Select.Option>
                <Select.Option value="3">百度FE</Select.Option>
                <Select.Option value="4">风华浪子</Select.Option>
              </Select>
            </FormItem>
            <FormItem label="爱好" name="tab"
              rules={[
                { required: true, message: '请选择爱好' }
              ]}>
              <Select mode="multiple">
                <Select.Option value="1">游泳</Select.Option>
                <Select.Option value="2">踢足球</Select.Option>
                <Select.Option value="3">爬山</Select.Option>
                <Select.Option value="4">骑行</Select.Option>
              </Select>
            </FormItem>
            <FormItem
              wrapperCol={{
                xs: { span: 24 },
                sm: { span: 10, offset: 5 }
              }}
            >
              <Button block type="primary" htmlType="submit">注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}