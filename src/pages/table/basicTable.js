import React, { Component } from 'react'
import { Card, Table } from 'antd'
import Axios from '@/axios/index.js'

export default class BasicTable extends Component {

  state = { dataSource: [], dataSource2: [], loading: false, pagination: {} }
  
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
    this.request()
  }

  // 动态获取动态数据
  request = (params = { page: 1 }) => {
    this.setState({ loading: true })
    Axios.ajax({
      url: '/table/list',
      method: 'post',
      data: {
        pageSize: 10,
        ...params
      }
    }).then(res => {
      const pagination = { ...this.state.pagination }
      pagination.total = res.result.total_count
      this.setState({
        dataSource2: res.result.list,
        loading: false,
        pagination
      })
    }).catch(() => {
      this.setState({ loading: false })
      return false
    })
  }

  // 分页
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination }
    console.log(pager)
    pager.current = pagination.current
    this.setState({
      pagination: pager
    })
    this.request({ page: pagination.current })
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
        align: 'center',
        render: (gender) => {
          return gender === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        align: 'center',
        render: (state) => {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '水电费',
            '4': '222',
            '5': '地方'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        align: 'center',
        render: (interest) => {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '散步'
          }
          return config[interest]
        }
      }
    ]
    return (
      <div className="content-wrap">
        <Card title="基础表格">
          <Table columns={columns} dataSource={this.state.dataSource} rowKey="id" bordered pagination={false}></Table>
        </Card>
        <Card title="动态数据渲染表格" style={{margin: '10px 0'}}>
          <Table
            loading={this.state.loading}
            columns={columns}
            dataSource={this.state.dataSource2}
            rowKey="id"
            bordered
            pagination={this.state.pagination}
            onChange={this.handleTableChange}>
          </Table>
        </Card>
      </div>
    )
  }
}