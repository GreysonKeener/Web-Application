import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TVList, TVInsert, login, Users } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/tv/list" exact component={TVList} />
                <Route path="/tv/create" exact component={TVInsert} />
                <Route path="/tv/login" exact component={login} />
                <Route path="/tv/Users" exact component={Users} />
                
            </Switch>
        </Router>
    )
}
document.body.style='background: lightgrey;';
export default App
