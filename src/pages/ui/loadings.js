import React, { Component } from 'react'
import { Card, Spin, Alert } from 'antd'
import './ui.less'
import { LoadingOutlined } from '@ant-design/icons'

class Loadings extends Component {
  render() {
    return(
      <div className="content-wrap">
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" className="spin"></Spin>
          <Spin className="spin" />
          <Spin size="large" className="spin"></Spin>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />}  className="spin"></Spin>
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="React"
            description="sdfsdfsdf"
            type="warning"
          ></Alert>
          <Spin tip="loading">
            <Alert
              message="React"
              description="sdfsdfsdf"
              type="info"
            ></Alert>
          </Spin>
          <Spin tip="加载中" indicator={<LoadingOutlined style={{ fontSize: 24 }} />}>
            <Alert
              message="React"
              description="sdfsdfsdf"
              type="success"
            ></Alert>
          </Spin>
        </Card>
      </div>
    )
  }
}

export default Loadings