import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AdminDashboard from "../dashboard/admin/dashboard";
import Accounts from "../admin/accounts/accounts";
import Tasks from "../admin/tasks/tasks";
import Archive from "../admin/archives/archive";
import Monitoring from "../admin/monitoring/monitoring";
import "./navigation.css";
import {logo} from '../resources/lock-logo.png'
export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <img src={logo}></img><label>Lockbox</label>
          <nav>
            <ul>
              <li>
                <Link style={{textDecoration:"none"}} to="/home">Dashboard</Link>
              </li>
              <li>
                <Link style={{textDecoration:"none"}} to="/monitoring">Monitoring</Link>
              </li>
              <li>
                <Link style={{textDecoration:"none"}} to="/accounts">Accounts</Link>
              </li>
              <li>
                <Link style={{textDecoration:"none"}} to="/tasks">Task Master</Link>
              </li>
              <li>
                <Link style={{textDecoration:"none"}} to="/archive">Archive</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
          <Route path="/home">
            <AdminDashboard />
          </Route>
          <Route path="/monitoring">
            <Monitoring />
          </Route>
          <Route path="/accounts">
            <Accounts />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
        </Switch>
      </Router>
    );
  }
}
