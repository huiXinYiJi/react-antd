import React from 'react'
import { Link } from 'react-router-dom'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        main page
        <Link to='/main/a'>水电费水电费</Link>
        { this.props.children }
      </div>
    )
  }
}