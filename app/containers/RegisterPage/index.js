/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import Form from 'components/RegisterComponents/RegisterForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';


const RegisterContainer = styled.div`
  max-width : 500px;
  margin : auto;
`;


export class RegisterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleFieldChange() { }

  render() {
    return (
      <div>
        <Helmet>
          <title>Register</title>
          <meta name="description" content="Description of RegisterPage" />
        </Helmet>
        <RegisterContainer>
          <Form handleFieldChange={this.handleFieldChange} />
        </RegisterContainer>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registerpage: makeSelectRegisterPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterPage);
