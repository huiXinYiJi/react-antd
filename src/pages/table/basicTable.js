import React, { Component } from 'react'
import { Card, Table } from 'antd'

export default class BasicTable extends Component {

  state = { dataSource: [] }
  
  componentDidMount() {
    const dataSource = [
      {
        id: '0',
        username: 'Jack',
        gender: '1',
        state: '1',
        interest: '1'
      },
      {
        id: '1',
        username: 'Tom',
        gender: '1',
        state: '1',
        interest: '1'
      },
      {
        id: '2',
        username: 'Lily',
        gender: '1',
        state: '1',
        interest: '1'
      }
    ]
    this.setState({ dataSource })
  }
  
  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id', // 此属性必须
        align: 'center'
      },
      {
        title: '用户名',
        dataIndex: 'username',
        align: 'center'
      },
      {
        title: '性别',
        dataIndex: 'gender',
        align: 'center'
      },
      {
        title: '状态',
        dataIndex: 'state',
        align: 'center'
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        align: 'center'
      }
    ]
    return (
      <div className="content-wrap">
        <Card title="基础表格">
          <Table columns={columns} dataSource={this.state.dataSource} rowKey="id" bordered pagination={false}></Table>
        </Card>
      </div>
    )
  }
}