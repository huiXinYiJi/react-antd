import React, { Component } from 'react';
import { Button, Card, Radio } from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons'
import './ui.less'

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      size: 'middle'
    }
  }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    })
  }

  handleChange= (e) => {
    console.log(e.target.value)
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return (
      <div className="content-wrap">
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Primary</Button>
          <Button>default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link" disabled>Disable</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon={<PlusOutlined />}>创建</Button>
          <Button icon={<EditOutlined />}>编辑</Button>
          <Button type="delete" icon={<DeleteOutlined />}>删除</Button>
          <Button shape="circle" icon={<SearchOutlined />}></Button>
          <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
          <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={true}></Button>
          <Button loading={true}>点击加载</Button>
          <Button shape="circle" loading={true}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组" className="card-wrap">
          <Button.Group className="button-group">
            <Button type="primary" icon={<LeftOutlined />}>返回</Button>
            <Button type="primary" icon={<RightOutlined />}>前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="middle">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Size</Button>
        </Card>
      </div>
    )
  }
}

export default Buttons
