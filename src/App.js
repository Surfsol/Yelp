import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
// import Main from './components/Main';
import Register from './components/Register';
// import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          {/* <li>
            <Link to="">Add Friend</Link>
          </li> */}
        </ul>
        {/* switch, can use without exact */}
        <Switch>
          {/* <PrivateRoute path="/friends" component={Friends} />
          <PrivateRoute path="" component={AddFriend} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/" component={Main} /> */}
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
