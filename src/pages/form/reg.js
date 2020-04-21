import React, { Component } from 'react'
import { Card, Form, Input, Button, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, Modal, Checkbox } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/lib/date-picker/locale/zh_CN'

const FormItem = Form.Item
const { TextArea } = Input


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

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

  offsetLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 10, offset: 5 }
    }
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
    console.log('Failed:', errorInfo.values, errorInfo.values['date'].format('YYYY-MM-DD HH:mm:ss'))
  }

  initialValues = {
    marriage: true,
    date: moment('2015-06-06', 'YYYY-MM-DD'),
    remember: true
  }

  state = {
    loading: false,
    previewVisible: false,
    previewImage: '',
    previewTitle: ''
  }

  handleChange = ({ file, fileList }) => {
    console.log(file, fileList);
    if (file.status === 'uploading') {
      return
    }
    if (file.status === 'done') {
      // ajax 与后端连接
    }
  }

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    console.log(file)
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    })
  }

  render() {
    const normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
    return (
      <div className="content-wrap">
        <Card title="注册表单">
          <Form
            layout="horizontal"
            { ... this.formItemLayout }
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            initialValues={this.initialValues}
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
            <FormItem label="是否已婚" name="marriage" valuePropName="checked">
              <Switch/>
            </FormItem>
            <FormItem label="生日" name="date">
              <DatePicker locale={locale}/>
            </FormItem>
            <FormItem label="联系地址" name="address">
              <TextArea autoSize={{
                minRows: 3,
                maxRows: 5
              }}></TextArea>
            </FormItem>
            <FormItem label="早起时间" name="time">
              <TimePicker></TimePicker>
            </FormItem>
            <FormItem label="upload" name="upload" valuePropName="fileList" getValueFromEvent={normFile}>
              <Upload
                name="file"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                onChange={this.handleChange}
                onPreview={this.handlePreview}>
                <div>
                  <PlusOutlined />
                  <div className="ant-upload-text">Upload</div>
                </div>
              </Upload>
            </FormItem>
            <FormItem { ... this.offsetLayout}>
              <FormItem name="remember" valuePropName="checked" noStyle
                rules={[
                  { required: true, message: '请选择服务协议' }
                ]}
              >
                <Checkbox>我已阅读</Checkbox>
              </FormItem>
              <a href="/">服务协议</a>
            </FormItem>
            <FormItem { ... this.offsetLayout} >
              <Button block type="primary" htmlType="submit">注册</Button>
            </FormItem>
          </Form>
        </Card>
        <Modal
          visible={this.state.previewVisible}
          title={this.state.previewTitle}
          footer={null}
          onCancel={() => this.setState({ previewVisible: false })}
        >
          <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
        </Modal>
      </div>
    )
  }
}