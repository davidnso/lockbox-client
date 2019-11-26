import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Login from "./login/login";

ReactDOM.render(
  <Router>
    <Route path='/' component={App}>
    </Route>
    <Route name="login" path='/app/login' component={Login}>
        </Route>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
