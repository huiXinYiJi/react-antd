import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '@/utils'
import Axios from '@/axios'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      sysTime: '',
      weather: {}
    }
  }

  componentDidMount() {
    this.setState({
      userName: '河畔一角'
    })
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState((state, props) => ({
        sysTime
      }))
    }, 1000)
    this.getWeather()
  }

  getWeather = () => {
    let cityCode = '北京'
    Axios.jsonp({
      url: 'http://api.jirengu.com/getWeather.php?city=' + cityCode
    }).then((res) => {
      // console.log(res)
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0]
        this.setState(() => ({ weather: data }))
      }
    })
  }
  
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎, {this.state.userName}</span>
            <a href="./">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.weather.dayPictureUrl} alt="weather-logo"/>
            </span>
            <span className="weather-detail">{this.state.weather.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
