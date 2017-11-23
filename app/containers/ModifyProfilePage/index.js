import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import LoadingIndicator from 'components/common/LoadingIndicator';
import ModifyForm from 'components/ModifyProfileComponents/ModifyForm';

import {
  makeSelectTechnologies,
  makeSelectTechnologiesLoading,
  makeSelectTechnologiesError,
} from 'containers/App/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
  getTechnologies,
} from 'containers/App/actions';

import {
  makeSelectProfile,
  makeSelectProfileError,
  makeSelectProfileLoading,
  makeSelectpostProfileModify,
  makeSelectpostProfileModifyLoading,
  makeSelectpostProfileModifyError,
} from './selectors';


import {
  getProfile,
  postProfileModification,
  cleanPostProfileModification,
} from './actions';
import reducer from './reducer';
import saga from './saga';


const Container = styled.div`
max-width : 500px;
margin : auto;
`;

function fieldObj(error, name, inputType) {
  return ({ error, name: `${name}`, inputType: `${inputType}` });
}


export class ModifyProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        name: fieldObj(false, 'Nombre', 'input'),
        city: fieldObj(false, 'Ciudad', 'input'),
        country: fieldObj(false, 'País', 'input'),
        tel: fieldObj(false, 'Tel.', 'input'),
        web: fieldObj(false, 'Web', 'input'),
      },
      values: {
        name: '',
        nickname: '',
        email: '',
        password: '',
        password_confirmation: '',
        city: '',
        country: '',
        tel: '',
        web: '',
        technologies: [],
      },

    };
    this.isFirstTime = false;
  }


  componentWillMount() {
    this.props.onGetTechnologies();
    this.props.onGetProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profileResponse != null && !this.isFirstTime) {
      const values = {
        name: nextProps.profileResponse.user.name,
        nickname: nextProps.profileResponse.user.nickname,
        email: nextProps.profileResponse.user.email,
        city: nextProps.profileResponse.user.city,
        country: nextProps.profileResponse.user.country,
        tel: nextProps.profileResponse.user.tel,
        web: nextProps.profileResponse.user.web,
        technologies: [],
      };
      nextProps.profileResponse.user.technologies.forEach((item) =>
        values.technologies.push({ value: item.id, label: item.name })
      );
      this.setState({ values });
      this.isFirstTime = true;
    }

    if (!nextProps.profileModifyLoading && nextProps.profileModify != null) {
      this.props.history.push('/profile');
      this.props.onCleanModifyProfile();
    }
  }

  componentWillUpdate(nextProps) {
    this.errorHandle(nextProps);
  }

  errorHandle(nextProps) {
    if (nextProps.profileModifyError != null) {
      let propertyName;
      let property;
      const properties = this.state.formFields;
      for (property in properties) {// eslint-disable-line
        properties[property].error = false;
      }
      for (propertyName in nextProps.profileModifyError.errors) {// eslint-disable-line
        if (properties[propertyName] !== undefined) {
          properties[propertyName].error = true;
        }
      }
    }
  }

  handleFieldChange(event) {
    const values = Object.assign({}, this.state.values);
    values[event.target.name] = event.target.value;
    this.setState({ values });
  }

  handleModifyOnClick() {
    const valuesToSend = Object.assign({}, this.state.values);
    if (valuesToSend.password === '' ||
      (valuesToSend.password === '' && valuesToSend.password_confirmation === '')) {
      delete valuesToSend.password;
      delete valuesToSend.password_confirmation;
    }
    valuesToSend.technologies_ids = [];
    valuesToSend.technologies.forEach((item) =>
      valuesToSend.technologies_ids.push(item.value)
    );
    delete valuesToSend.technologies;
    this.props.onModifyProfile({ ...valuesToSend });
  }

  handleSelectedTechnologies(val) {
    const values = Object.assign({}, this.state.values);
    values.technologies = val;
    this.setState({ values });
  }

  render() {
    let renderFields;
    if (this.props.profileLoading) {
      renderFields = <LoadingIndicator />;
    } else if (this.props.profileError) {
      renderFields = <div> Error! </div>;
    } else if (this.props.profileResponse != null) {
      renderFields = (
        <ModifyForm
          formFields={this.state.formFields}
          handleModifyOnClick={() => this.handleModifyOnClick()}
          handleFieldChange={(event) => this.handleFieldChange(event)}
          handleSelectedTechnologies={(values) => this.handleSelectedTechnologies(values)}
          technologies={this.props.technologiesResponse}
          values={this.state.values}
        />
      );
    }


    return (
      <div>
        <Helmet>
          <title>Modificar Perfil</title>
          <meta name="description" content="Description of ModifyProfilePage" />
        </Helmet>
        <Container>
          <h1>{'Editar perfil'}</h1>
          {renderFields}
        </Container>
      </div>
    );
  }
}


ModifyProfilePage.propTypes = {
  onGetTechnologies: PropTypes.func,
  onGetProfile: PropTypes.func,
  profileLoading: PropTypes.bool,
  profileError: PropTypes.bool,
  profileResponse: PropTypes.object,
  technologiesResponse: PropTypes.array,
  onModifyProfile: PropTypes.func,
  profileModifyLoading: PropTypes.bool,
  profileModify: PropTypes.object,
  onCleanModifyProfile: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  technologiesResponse: makeSelectTechnologies(),
  technologiesLoading: makeSelectTechnologiesLoading(),
  technologiesError: makeSelectTechnologiesError(),
  profileResponse: makeSelectProfile(),
  profileError: makeSelectProfileError(),
  profileLoading: makeSelectProfileLoading(),
  profileModify: makeSelectpostProfileModify(),
  profileModifyLoading: makeSelectpostProfileModifyLoading(),
  profileModifyError: makeSelectpostProfileModifyError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetTechnologies: (evt) => {
      dispatch(getTechnologies(evt));
    },
    onGetProfile: (evt) => {
      dispatch(getProfile(evt));
    },
    onModifyProfile: (evt) => {
      dispatch(postProfileModification(evt));
    },
    onCleanModifyProfile: (evt) => {
      dispatch(cleanPostProfileModification(evt));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'modifyProfilePage', reducer });
const withSaga = injectSaga({ key: 'modifyProfilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ModifyProfilePage);
