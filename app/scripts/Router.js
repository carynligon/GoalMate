import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
import GroupPage from './Pages/GroupPage';
import SettingsPage from './Pages/SettingsPage';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/user" component={UserProfile}/>
    <Route path="group" component={GroupPage}/>
    <Route path="settings" component={SettingsPage}/>
  </Router>
);

export default router;
