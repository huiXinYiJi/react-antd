import React, { Component } from 'react'
import { Card, Tabs, message } from 'antd'
import './ui.less'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

class Tab extends Component {

  callback = (key) => {
    message['info'](key)
  }
  render() {
    return(
      <div className="content-wrap">
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab={<span> <AppleOutlined /> Tab 1 </span>} key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab={<span> <AndroidOutlined /> Tab 3 </span>} key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}

export default Tab