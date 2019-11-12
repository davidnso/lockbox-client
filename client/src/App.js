import React, { Component } from "react";
import "./App.css";
import Navigation from "./navigation/navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
require("typeface-nunito");

function renderNavigation() {
  return <Navigation />;
}

export class App extends Component {
  state = {
    isVisible: true
  };
  render() {
    return (
      <Router>
        {this.state.isVisible && (
          <div className="context" >
            <Link
              className="button"
              style={{ textDecoration: "none" }}
              onClick={() => this.setState({ isVisible: false })}
              to="/student"
            >
              <p>Student</p>
            </Link>

            <Link
              className="button"
              style={{ textDecoration: "none" }}
              onClick={() => this.setState({ isVisible: false })}
              to="/admin"
            >
              <p>Administrator</p>
            </Link>
          </div>
        )}
        <Switch>
          <Route path="/student">
            <Navigation context="student" />
          </Route>
          <Route path="/admin">
            <Navigation context="administrator" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
