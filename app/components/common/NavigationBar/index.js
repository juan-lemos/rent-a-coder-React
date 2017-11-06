/**
*
* NavigationBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import messages from './messages';


function NavigationBar() {
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
          <LinkContainer to="/login">
            <NavItem eventKey={2}>
              <FormattedMessage {...messages.login} />
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/profile">
            <NavItem eventKey={3}>
              <FormattedMessage {...messages.profile} />
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  return (

    <div>
      {navbarInstance}
    </div>
  );
}

NavigationBar.propTypes = {

};

export default NavigationBar;
