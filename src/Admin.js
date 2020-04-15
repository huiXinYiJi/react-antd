import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Header, Footer, NavLeft } from '@/Components'
import Home from '@/pages/home'

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
            <Home></Home>
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}

export default Admin
