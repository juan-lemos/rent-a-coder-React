import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import LoginForm from 'components/LoginComponents/LoginForm';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';

import {
  makeSelectLogin,
  makeSelectLoginLoading,
  makeSelectLoginError,
} from './selectors';
import reducer from './reducer';
import { login } from './actions';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorInLogin: false,
    };
  }

  handleSignInClick() {
    const { email, password } = this.state;
    this.props.onLogin({ email, password });
    // this.props.history.push('/home');
  }

  handleChangeOnInputField(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <div style={{ maxWidth: '300px', margin: 'auto' }}>
          <LoginForm
            logoUrl={'http://ucu.edu.uy/sites/all/themes/univer/logo.png'}
            errorInLogin={this.state.errorInLogin}
            handleFieldChange={(event) => (this.handleChangeOnInputField(event))}
            handleSignInClick={() => this.handleSignInClick()}
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  // history: PropTypes.object,
  onLogin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginResponse: makeSelectLogin,
  loginLoading: makeSelectLoginLoading,
  loginError: makeSelectLoginError,
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (evt) => {
      dispatch(login(evt));
    },
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
