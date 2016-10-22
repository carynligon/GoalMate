import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/user" component={UserProfile}/>
  </Router>
);

export default router;
