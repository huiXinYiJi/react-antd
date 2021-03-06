import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Header, Footer, NavLeft } from '@/Components'

class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col xs={2} sm={4} className="nav-left">
          <NavLeft />
        </Col>
        <Col xs={22} sm={20} flex={1} className="main">
          <Header />
          <Row className="content">
            { this.props.children }
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}

export default Admin
