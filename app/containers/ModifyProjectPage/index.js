import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ModifyForm from 'components/ModifyProjectComponents/ModifyForm';
import LoadingIndicator from 'components/common/LoadingIndicator';
import moment from 'moment';
import styled from 'styled-components';

import {
  makeSelectTechnologies,
  makeSelectTechnologiesLoading,
  makeSelectTechnologiesError,
} from 'containers/App/selectors';
import {
  getTechnologies,
} from 'containers/App/actions';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectProject,
  makeSelectProjectError,
  makeSelectProjectLoading,
  makeSelectpostProjectModify,
  makeSelectpostProjectModifyError,
  makeSelectpostProjectModifyLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import { postProjectModification, getProject } from './actions';

const Container = styled.div`
max-width : 500px;
margin : auto;
`;

export class ModifyProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      errorsInFields: {
        name: false,
        description: false,
        deadline: false,
        technologies_ids: false,
      },
      values: {
        name: '',
        description: '',
        deadline: moment(),
        selectedTechnologies: [],
      },
    };
    this.props.onGetProject(this.props.match.params.proyX);
  }

  componentWillMount() {
    this.props.onGetTechnologies();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getProject != null) {
      const technologies = [];
      nextProps.getProject.technologies.forEach((item) =>
        technologies.push({ value: item.id, label: item.name })
      );
      const values = {
        name: nextProps.getProject.name,
        description: nextProps.getProject.description,
        deadline: moment(nextProps.getProject.deadline, 'YYYY-MM-DD'),
        selectedTechnologies: technologies,
      };
      this.setState({ values });
    }

    // if (!nextProps.profileModifyLoading && nextProps.profileModify != null) {
    //   this.props.history.push('/profile');
    //   this.props.onCleanModifyProfile();
    // }
  }

  componentWillUpdate(nextProps) {
    // console.log(nextProps.postProjectModificationError);
    if (nextProps.postProjectModificationError != null) {
      let propertyName;
      let property;
      const properties = this.state.errorsInFields;
      for (property in properties) {// eslint-disable-line 
        properties[property] = false;
      }
      for (propertyName in nextProps.postProjectModificationError.errors) {// eslint-disable-line 
        if (properties[propertyName] !== undefined) {
          properties[propertyName] = true;
        }
      }
    }
  }

  handleFieldChange(event) {
    const values = Object.assign({}, this.state.values);
    values[event.target.name] = event.target.value;
    this.setState({ values });
  }

  handleSelectedTechnologies(val) {
    const values = Object.assign({}, this.state.values);
    values.selectedTechnologies = val;
    this.setState({ values });
  }

  handleDateChange(date) {
    const values = Object.assign({}, this.state.values);
    values.deadline = date;
    this.setState({ values });
  }

  handleClickOnModify() {
    const values = Object.assign({}, this.state.values);
    values.deadline = `${values.deadline.year()}-${values.deadline.month() + 1}-${values.deadline.date()}`;
    values.technologies_ids = [];
    this.state.values.selectedTechnologies.forEach((item) =>
      values.technologies_ids.push(item.value)
    );
    delete values.selectedTechnologies;
    this.props.onModifyProject({ values, projectId: this.props.match.params.proyX });
  }

  render() {
    let renderFields;
    if (this.props.getProjectLoading) {
      renderFields = <LoadingIndicator />;
    } else if (this.props.getProjectError) {
      renderFields = <div> Error! </div>;
    } else if (this.props.getProject != null) {
      renderFields = (
        <ModifyForm
          handleDateChange={(date) => this.handleDateChange(date)}
          handleFieldChange={(e) => this.handleFieldChange(e)}
          handleSelectedTechnologies={(val) => this.handleSelectedTechnologies(val)}
          handleClickOnCreate={() => this.handleClickOnModify()}
          errorsInFields={this.state.errorsInFields}
          technologies={this.props.technologiesResponse}
          values={this.state.values}
        />
      );
    }


    return (
      <div>
        <Helmet>
          <title>ModifyProjectPage</title>
          <meta name="description" content="Description of ModifyProjectPage" />
        </Helmet>
        <Container>
          {renderFields}
        </Container>
      </div>
    );
  }
}

ModifyProjectPage.propTypes = {
  match: PropTypes.object,
  onGetTechnologies: PropTypes.func,
  // technologiesLoading: PropTypes.bool,
  // technologiesError: PropTypes.bool,
  technologiesResponse: PropTypes.array,
  getProject: PropTypes.object,
  getProjectLoading: PropTypes.bool,
  getProjectError: PropTypes.bool,
  onGetProject: PropTypes.func,
  onModifyProject: PropTypes.func,
  // onCreateProject: PropTypes.func,
  // createProjectLoading: PropTypes.bool,
  // createProjectResponse: PropTypes.object,
  // cleanPutProject: PropTypes.func,
  // history: PropTypes.object,

};

const mapStateToProps = createStructuredSelector({
  technologiesResponse: makeSelectTechnologies(),
  technologiesLoading: makeSelectTechnologiesLoading(),
  technologiesError: makeSelectTechnologiesError(),
  getProject: makeSelectProject(),
  getProjectLoading: makeSelectProjectLoading(),
  getProjectError: makeSelectProjectError(),
  postProjectModification: makeSelectpostProjectModify(),
  postProjectModificationError: makeSelectpostProjectModifyError(),
  postProjectModificationLoading: makeSelectpostProjectModifyLoading(),

});

function mapDispatchToProps(dispatch) {
  return {
    onGetTechnologies: (evt) => {
      dispatch(getTechnologies(evt));
    },
    onModifyProject: (evt) => {
      dispatch(postProjectModification(evt));
    },
    onGetProject: (evt) => {
      dispatch(getProject(evt));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'modifyProjectPage', reducer });
const withSaga = injectSaga({ key: 'modifyProjectPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ModifyProjectPage);
