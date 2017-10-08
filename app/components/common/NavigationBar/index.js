/**
*
* NavigationBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import messages from './messages';


function NavigationBar() {
  const navbarInstance = (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <FormattedMessage {...messages.pageName} />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            <FormattedMessage {...messages.publish} />
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <FormattedMessage {...messages.profile} />
          </NavItem>
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
