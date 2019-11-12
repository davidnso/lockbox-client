import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AdminDashboard from "../dashboard/admin/dashboard";
import StudentDashboard from "../dashboard/student/dashboard";
import Accounts from "../admin/accounts/accounts";
import Tasks from "../admin/tasks/tasks";
import Archive from "../admin/archives/archive";
import Monitoring from "../admin/monitoring/monitoring";
import "./navigation.css";
import { logo } from "../resources/lock-logo.png";
import Tickets from "../students/tickets/tickets";
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: true,
      admin: false
    };
  }
  render() {
    return (
      <>
      <Router>
        {this.props.context == "administrator" && (
          <>
            <div className="container">
              <div className="logo" src={logo}></div>
              <hr />
              <nav>
                <ul>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/home">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/monitoring">
                      Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/accounts">
                      Accounts
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/tasks">
                      Task Master
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/archive">
                      Archive
                    </Link>
                  </li>
                </ul>
              </nav>
              <img
                src={require("../resources/bottom-image.png")}
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "160px",
                  height: "160x"
                }}
              ></img>
            </div>

            <Switch>
              <Route
                exact
                path="/admin"
                render={() => <Redirect to="/home" />}
              ></Route>
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
          </>
        )}
      </Router>
        <Router>
{       this.props.context == 'student' && <><div className="container">
          <div className='logo' src={logo}></div>
          <hr/>
          <nav>
            <ul>
              <li>
                <Link style={{textDecoration:"none"}} to="/home">Dashboard</Link>
              </li>
              <li>
                <Link style={{textDecoration:"none"}} to="/tickets">Tickets</Link>
              </li>
              <li>
                <Link style={{textDecoration:"none"}} to="/notifications">notifications</Link>
              </li>
            </ul>
          </nav>
          <img src={require('../resources/bottom-image.png')} style={{position:"absolute",left:0,bottom:0,width:'160px',height:'160x'}}></img>
        </div>

        <Switch>
          <Route exact path="/student" render={() => <Redirect to="/home" />}></Route>
          <Route path="/home">
            <StudentDashboard />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route path="/notifications">
            <Accounts />
          </Route>

        </Switch>
      </>}
      </Router>
      </>
    );
  }
}
