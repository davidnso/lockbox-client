import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Login from "./login/login";

  export default ()=>(
      <Router>
          <Switch>
             <Route path='/login' component={Login}/>
          </Switch>
      </Router>
  )