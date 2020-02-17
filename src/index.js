import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import Users from './users';
import User from './user';
import Work from './work';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const routing = (
    <React.Fragment>
        
        <Router>
            <NavBar ></NavBar>
            <Switch>

                <Route path="/user/:id" component={ User } />
                <Route path="/work/:id" component={ Work } />
                <Route component={ Users } />
            </Switch>
        </Router>
    </React.Fragment>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
