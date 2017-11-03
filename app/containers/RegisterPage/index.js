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
import { register } from './actions';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectRegister,
  makeSelectRegisterLoading,
  makeSelectRegisterError,
} from './selectors';

const RegisterContainer = styled.div`
  max-width : 500px;
  margin : auto;
`;

function fieldObj(id, error, name, inputType) {
  return ({ id: `${id}`, error, name: `${name}`, inputType: `${inputType}` });
}

export class RegisterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      formFields: [
        fieldObj('name', false, 'Nombre', 'input'),
        fieldObj('nickname', false, 'Nombre de usuario', 'input'),
        fieldObj('email', false, 'Email', 'input'),
        fieldObj('password', false, 'Contraseña', 'password'),
        fieldObj('password_confirmation', false, 'Repita contraseña', 'password'),
        fieldObj('city', false, 'Ciudad', 'input'),
        fieldObj('country', false, 'País', 'input'),
        fieldObj('tel', false, 'Tel.', 'input'),
        fieldObj('web', false, 'Web', 'input'),
      ],
    };
    this.values = {
      name: '',
      nickname: '',
      email: '',
      password: '',
      password_confirmation: '',
      city: '',
      country: '',
      tel: '',
      web: '',
    };
  }

  handleFieldChange(event) {
    this.values[event.target.name] = event.target.value;
  }

  handleCreateOnClick() {
    this.props.onCreate({ ...this.values });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Register</title>
          <meta name="description" content="Description of RegisterPage" />
        </Helmet>
        <RegisterContainer>
          <Form
            formFields={this.state.formFields}
            handleCreateOnClick={() => this.handleCreateOnClick()}
            handleFieldChange={(event) => this.handleFieldChange(event)}
          />
        </RegisterContainer>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  onCreate: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  registerResponse: makeSelectRegister(),
  registerLoading: makeSelectRegisterLoading(),
  registerError: makeSelectRegisterError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCreate: (evt) => {
      dispatch(register(evt));
    },
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
