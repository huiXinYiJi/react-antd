import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './../router/Main'
import About from './../router/About'
import Topic from './../router/Topic'
import Home from './Home'

export default class IRouter extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Home>
          <Route path='/main' render={() =>
            <Main>
              <Route exact path='/main/a' component={About}></Route>
            </Main>
          }></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/topic' exact component={Topic}></Route>
        </Home>
      </BrowserRouter>
    )
  }
}