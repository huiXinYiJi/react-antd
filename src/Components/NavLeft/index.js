import React, { Component } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { WindowsOutlined } from '@ant-design/icons'
import MenuConfig from '@/config/menuConfig'
import './index.less'

const { SubMenu } = Menu

class NavLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuTreeNode: []
    }
  }
  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    
    this.setState({ menuTreeNode })
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <WindowsOutlined style={{fontSize: 60}} className="logo-img"/>
          <h1>MS</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
          {/* <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </div>
    )
  }
}

export default NavLeft
