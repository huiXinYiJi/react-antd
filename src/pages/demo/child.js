import React from 'react'

export default class Child extends React.Component {
  render() {
    return (
      <div>
        <p>这里是子组件，测试子组件的生命周期</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
  
  // 已废弃
  // componentWillMount() {
  //   console.log('will Mount')
  // }

  componentDidMount() {
    console.log('did Mount')
  }

  // 已废弃
  // componentWillReceiveProps(newProps) {
  //   console.log('will receive props', newProps)
  // }

  shouldComponentUpdate() {
    console.log('should update')
    return true
  }

  // 已废弃
  // componentWillUpdate() {
  //   console.log('will update')
  // }

  componentDidUpdate() {
    console.log('did update')
  }

}
