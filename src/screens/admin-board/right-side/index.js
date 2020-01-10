import React from 'react'
import Dashboard from './dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './Customers'

const index = () => {
    return (
        // <div>
        <Router>
			<Switch>
                <Route exact path="/" active component={Dashboard} />
                <Route path="/customers" active component={Customers} />
            </Switch>
         </Router>
        // </div>
    )
}
export default index