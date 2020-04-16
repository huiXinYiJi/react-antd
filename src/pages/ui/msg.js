import React, { Component } from 'react'
import { Card, Button, message } from 'antd'
import './ui.less'

class Msg extends Component {

  openMessage = (type) => {
    message[type](type + ' sfsdfsf')
  }

  render() {
    return(
      <div className="content-wrap">
        <Card title="全局提示message" className="card-wrap">
          <Button type="primary" onClick={() => this.openMessage('success')}>Success</Button>
          <Button type="primary" onClick={() => this.openMessage('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openMessage('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.openMessage('error')}>Error</Button>
          <Button type="primary" onClick={() => this.openMessage('loading')}>loading</Button>
        </Card>
      </div>
    )
  }
}

export default Msg