import React from 'react';
import {
  getSessionToken,
} from 'containers/App/session';
import { Redirect } from 'react-router-dom';

function RedirectNoLogged(WrappedComponent) {
  class AppRedirectNoLogged extends React.Component {
    isNotlogged() {
      return getSessionToken() == null || getSessionToken() === 'null';
    }
    render() {
      if (this.isNotlogged()) {
        return <Redirect to="/login" />;
      }
      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>);
    }
  }

  AppRedirectNoLogged.propTypes = {
  };

  return AppRedirectNoLogged;
}

export default RedirectNoLogged;

