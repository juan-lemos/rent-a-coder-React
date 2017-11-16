import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
  getSessionToken,
  resetLogginVariables,
} from 'containers/App/session';
import messages from './messages';


export class NavigationBar extends React.PureComponent {

  chooseMessage() {
    if (getSessionToken() == null || getSessionToken() === 'null') {
      return <FormattedMessage {...messages.login} />;
    }
    return (
      <FormattedMessage {...messages.logout} />
    );
  }

  resetVariablesLoginAndMoveLogin() {
    resetLogginVariables();
    this.props.history.push('/profile');
  }


  render() {
    const path = this.props.location.pathname;
    const navbarInstance = (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <FormattedMessage {...messages.pageName} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/publishProject">
              <NavItem eventKey={1}>
                <FormattedMessage {...messages.publish} />
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem
              eventKey={2}
              active={path === '/login'}
              onClick={() => this.resetVariablesLoginAndMoveLogin()}
            >
              {this.chooseMessage()}
            </NavItem>
            <LinkContainer to="/profile">
              <NavItem eventKey={3}>
                <FormattedMessage {...messages.profile} />
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    );

    return (

      <div>
        {navbarInstance}
      </div>
    );
  }
}
NavigationBar.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(NavigationBar);
