/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import LoginForm from 'components/LoginComponents/LoginForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorInLogin: false,
    };
  }

  handleChangeOnInputField(event) {
    const change = {};
    change[event.target.id] = event.target.value;
    this.setState(change);
  }

  render() {
    return (
      <div style={{ maxWidth: '300px', margin: 'auto' }}>
        <LoginForm
          logoUrl={'http://ucu.edu.uy/sites/all/themes/univer/logo.png'}
          errorInLogin={this.state.errorInLogin}
          handleFieldChange={(event) => (this.handleChangeOnInputField(event))}
          handleSignInClick={() => (console.log(this.state.email))}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginpage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
