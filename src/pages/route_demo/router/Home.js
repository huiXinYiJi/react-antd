import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topic from './Topic'
import NoMatch from './NoMatch'

export default class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topic">Topic</Link></li>
        </ul>
        <Switch>
          <Route path='/' exact component={Main}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/topic' component={Topic}></Route>
          <Route path='/topic' component={Topic}></Route>
          <Route path="*"><NoMatch /></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}