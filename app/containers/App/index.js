/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import ProfilePage from 'containers/ProfilePage';
import ModififyProfilePage from 'containers/ModifyProfilePage';
import LoginPage from 'containers/LoginPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavigationBar from 'components/common/NavigationBar';
import RegisterPage from 'containers/RegisterPage';
import PublishProjectPage from 'containers/PublishProjectPage';
import CandidatesPage from 'containers/CandidatesPage';

export default function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/profileEdit/" component={ModififyProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/publishProject" component={PublishProjectPage} />
        <Route path="/candidates/:proyX" component={CandidatesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div >
  );
}
