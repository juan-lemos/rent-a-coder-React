import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import LoginForm from 'components/LoginComponents/LoginForm';
import Logo from 'images/rent-a-coder-logo.png';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLogin,
  makeSelectLoginLoading,
  makeSelectLoginError,
} from './selectors';

import reducer from './reducer';
import { login } from './actions';
import saga from './saga';


export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loginLoading && nextProps.loginResponse != null) {
      this.props.history.push('/profile');
    }
  }

  handleSignInClick() {
    const { email, password } = this.state;
    this.props.onLogin({ email, password });
  }

  handleChangeOnInputField(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleClickRegister() {
    this.props.history.push('/register');
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <div style={{ maxWidth: '300px', margin: 'auto' }}>
          <LoginForm
            logoUrl={Logo}
            errorInLogin={this.props.loginError}
            handleFieldChange={(event) => (this.handleChangeOnInputField(event))}
            handleSignInClick={() => this.handleSignInClick()}
            handleClickRegister={() => this.handleClickRegister()}
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object,
  onLogin: PropTypes.func,
  loginResponse: PropTypes.object,
  loginLoading: PropTypes.bool,
  loginError: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loginResponse: makeSelectLogin(),
  loginLoading: makeSelectLoginLoading(),
  loginError: makeSelectLoginError(),
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
