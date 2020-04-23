import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from './Admin'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Buttons from '@/pages/ui/buttons.js'
import Modals from '@/pages/ui/modals'
import Loadings from '@/pages/ui/loadings'
import Notice from '@/pages/ui/notification'
import Msg from '@/pages/ui/msg'
import Tab from '@/pages/ui/tab'
import FormLogin from '@/pages/form/login'
import Reg from '@/pages/form/reg'
import BasicTable from '@/pages/table/basicTable'
import NoMatch from '@/pages/noMatch'

export default class IRouter extends React.Component {

  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route exact path="/">
            <Redirect to="/admin/home" />
          </Route>
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route path="/admin/home" component={Home} />
                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                <Route path="/admin/ui/modals" component={Modals}></Route>
                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                <Route path="/admin/ui/notification" component={Notice}></Route>
                <Route path="/admin/ui/message" component={Msg}></Route>
                <Route path="/admin/ui/tab" component={Tab}></Route>
                <Route path="/admin/form/login" component={FormLogin}></Route>
                <Route path="/admin/form/reg" component={Reg}></Route>
                <Route path="/admin/table/basic" component={BasicTable}></Route>
                <Route path="*" component={NoMatch}></Route>
              </Switch>
            </Admin>
          }></Route>
        </App>
      </HashRouter>
    )
  }
}