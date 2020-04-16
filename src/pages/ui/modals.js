import React, { Component } from 'react';
import { Button, Card, Modal } from 'antd'
import './ui.less'

class Modals extends Component {

  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }

  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: type,
      content: 'sdfsdfsdfsdfsdf',
      onOk() {
        console.log('ok')
      },
      onCancel() {
        console.log('cancel')
      }
    })
  }

  render() {
    return (
      <div className="content-wrap">
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹窗</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal
          title="Modal 1"
          visible={this.state.showModal1}
          onCancel={() => this.setState({
            showModal1: false
          })}>
          <p>Modal 1</p>
        </Modal>
        <Modal
          title="Modal 2"
          visible={this.state.showModal2}
          okText="好的"
          cancelText="算了"
          onCancel={() => this.setState({
            showModal2: false
          })}>
          <p>Modal 2</p>
        </Modal>
        <Modal
          style={{top: 20}}
          title="Modal 3"
          visible={this.state.showModal3}
          onCancel={() => this.setState({
            showModal3: false
          })}>
          <p>Modal 3</p>
        </Modal>
        <Modal
          centered
          title="Modal 4"
          visible={this.state.showModal4}
          onCancel={() => this.setState({
            showModal4: false
          })}>
          <p>Modal 4</p>
        </Modal>
      </div>
    )
  }
}

export default Modals
