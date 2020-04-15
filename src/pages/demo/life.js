import React, { Component } from 'react'
import Child from './child'
import './index.less'
import './test.scss'
import styles from './exam.module.scss'
import { Button } from 'antd'
import Report from './Report.module.less'

class Life extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  render() {
    return (
      <div className='content box'>
        <p className={styles.app}>React 生命周期介绍</p>
        <Button type="primary" onClick={this.handleAdd}>点击一下</Button>
        <p className={Report.wrapper}>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div>
    )
  }

  handleAdd() {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default Life
