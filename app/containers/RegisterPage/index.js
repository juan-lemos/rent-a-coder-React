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

function fieldObj(error, name, inputType) {
  return ({ error, name: `${name}`, inputType: `${inputType}` });
}

export class RegisterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        name: fieldObj(false, 'Nombre', 'input'),
        nickname: fieldObj(false, 'Nombre de usuario', 'input'),
        email: fieldObj(false, 'Email', 'input'),
        password: fieldObj(false, 'Contraseña', 'password'),
        password_confirmation: fieldObj(false, 'Repita contraseña', 'password'),
        city: fieldObj(false, 'Ciudad', 'input'),
        country: fieldObj(false, 'País', 'input'),
        tel: fieldObj(false, 'Tel.', 'input'),
        web: fieldObj(false, 'Web', 'input'),
      },
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

  componentWillReceiveProps(nextProps) {
    if (!nextProps.registerLoading && nextProps.registerResponse != null) {
      this.props.history.push('/profile');
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.registerError != null) {
      let propertyName;
      let property;
      const properties = this.state.formFields;
      for (property in properties) {// eslint-disable-line
        properties[property].error = false;
      }
      for (propertyName in nextProps.registerError.errors) {// eslint-disable-line
        if (properties[propertyName] !== undefined) {
          properties[propertyName].error = true;
        }
      }
    }
  }

  handleFieldChange(event) {
    this.values[event.target.name] = event.target.value;
  }

  handleCreateOnClick() {
    this.props.onCreate({ ...this.values });
  }

  render() {
    // console.log()
    return (
      <div>
        <Helmet>
          <title>Register</title>
          <meta name="description" content="Description of RegisterPage" />
        </Helmet>
        <RegisterContainer>
          <h1>{'Registro:'}</h1>
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
  registerResponse: PropTypes.object,
  registerLoading: PropTypes.bool,
  history: PropTypes.object,
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
