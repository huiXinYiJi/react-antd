import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from '@/pages/login'
import Admin from './Admin'
import Buttons from '@/pages/ui/buttons.js'
import Modals from '@/pages/ui/modals'
import Loadings from '@/pages/ui/loadings'
import Notice from '@/pages/ui/notification'
import Msg from '@/pages/ui/msg'
import Tab from '@/pages/ui/tab'
import NoMatch from '@/pages/noMatch'

export default class IRouter extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                <Route path="/admin/ui/modals" component={Modals}></Route>
                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                <Route path="/admin/ui/notification" component={Notice}></Route>
                <Route path="/admin/ui/message" component={Msg}></Route>
                <Route path="/admin/ui/tab" component={Tab}></Route>
                <Route path="*" component={NoMatch}></Route>
              </Switch>
            </Admin>
          }></Route>
        </App>
      </BrowserRouter>
    )
  }
}