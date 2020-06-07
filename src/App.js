import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';
import Confirmation from './Components/Confirmation/Confirmation';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/signup">
          <SignUp/>
          </Route>
          <Route path="/login">
          <LogIn/>
          </Route>
          <Route path="/payment">
          <Confirmation/>
          </Route>
        </Switch>
 
    </Router>
    </div>
  );
}

export default App;
