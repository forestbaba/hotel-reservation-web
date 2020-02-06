import React from 'react'
import Dashboard from './dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './customer'
import Room from './rooms'
import History from './history'
import Information from './information'
import Addnewroom from './addrooms'
import Login from '../../login/Login.page'

const index = () => {
    return (
        // <div>
        // <Router>
        <Switch>
            <Route exact path="/" active component={Dashboard} />
            <Route exact path="/customers" active component={Customers} />
            <Route path="/rooms" active component={Room} />
            <Route path="/history" active component={History} />
            <Route path="/information" active component={Information} />
            <Route path="/addnew" active component={Addnewroom} />
            <Route path="/login" active component={Login} />
        </Switch>
        //  </Router>
        // </div>
    )
}
export default index