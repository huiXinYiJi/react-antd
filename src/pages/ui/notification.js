import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'

class Notice extends Component {

  openNotice = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: type,
      description: '水电费水电费水电费'
    })
  }

  render() {
    return(
      <div className="content-wrap">
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotice('success', 'topLeft')}>Success topLeft</Button>
          <Button type="primary" onClick={() => this.openNotice('info', 'topRight')}>Info topRight</Button>
          <Button type="primary" onClick={() => this.openNotice('warning', 'bottomLeft')}>Warning bottomLeft</Button>
          <Button type="primary" onClick={() => this.openNotice('error', 'bottomRight')}>Error bottomRight</Button>
        </Card>
      </div>
    )
  }
}

export default Notice