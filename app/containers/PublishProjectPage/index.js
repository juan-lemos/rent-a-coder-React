import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import ProjectForm from 'components/PublishProjectComponents/ProjectForm';
import moment from 'moment';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import LoadingIndicator from 'components/common/LoadingIndicator';

import {
  getTechnologies,
  putProject,
  cleanPutStates,
} from './actions';

import reducer from './reducer';
import saga from './saga';
import {
  makeSelectTechnologies,
  makeSelectTechnologiesLoading,
  makeSelectTechnologiesError,
  makeSelectProject,
  makeSelectProjectLoading,
  makeSelectProjectError,
} from './selectors';


const Container = styled.div`
  max-width : 500px;
  margin : auto;
`;

export class PublishProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      selectedTechnologies: [],
      errorsInFields: {
        name: false,
        description: false,
        deadline: false,
        technologies_ids: false,
      },
    };
    this.values = {
      name: '',
      description: '',
      deadline: '',
      technologies_ids: [],
    };
  }

  componentWillMount() {
    this.props.onGetTechnologies();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.createProjectLoading && nextProps.createProjectResponse != null) {
      this.props.cleanPutProject();
      this.props.history.push('/profile');
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.createProjectError != null) {
      let propertyName;
      let property;
      const properties = this.state.errorsInFields;
      for (property in properties) {// eslint-disable-line 
        properties[property] = false;
      }
      for (propertyName in nextProps.createProjectError.errors) {// eslint-disable-line 
        if (properties[propertyName] !== undefined) {
          properties[propertyName] = true;
        }
      }
    }
  }

  handleDateChange(date) {
    this.values.deadline = `${date.year()}-${date.month() + 1}-${date.date()}`;
    this.setState({
      startDate: date,
    });
  }

  handleFieldChange(event) {
    this.values[event.target.name] = event.target.value;
  }

  handleSelectedTechnologies(val) {
    this.setState({ selectedTechnologies: val });
  }


  handleClickOnCreate() {
    this.values.technologies_ids = [];
    this.state.selectedTechnologies.forEach((item) =>
      this.values.technologies_ids.push(item.value)
    );
    this.props.onCreateProject({ ...this.values });
  }


  render() {
    let renderBody;
    if (this.props.technologiesLoading) {
      renderBody = <LoadingIndicator />;
    } else if (this.props.technologiesError) {
      renderBody = <div>Error Loading</div>;
    } else if (this.props.technologiesResponse != null) {
      renderBody = (
        <ProjectForm
          date={this.state.startDate}
          handleDateChange={(date) => this.handleDateChange(date)}
          handleFieldChange={(event) => this.handleFieldChange(event)}
          handleSelectedTechnologies={(val) => this.handleSelectedTechnologies(val)}
          handleClickOnCreate={() => this.handleClickOnCreate()}
          technologies={this.props.technologiesResponse}
          selectedTechnologies={this.state.selectedTechnologies}
          errorsInFields={this.state.errorsInFields}
        />
      );
    }

    return (
      <div>
        <Helmet>
          <title>PublishProjectPage</title>
          <meta name="description" content="Description of PublishProjectPage" />
        </Helmet>
        <Container>
          {renderBody}
        </Container>
      </div>
    );
  }
}

PublishProjectPage.propTypes = {
  onGetTechnologies: PropTypes.func,
  technologiesLoading: PropTypes.bool,
  technologiesError: PropTypes.bool,
  technologiesResponse: PropTypes.array,
  onCreateProject: PropTypes.func,
  createProjectLoading: PropTypes.bool,
  createProjectResponse: PropTypes.object,
  cleanPutProject: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  technologiesResponse: makeSelectTechnologies(),
  technologiesLoading: makeSelectTechnologiesLoading(),
  technologiesError: makeSelectTechnologiesError(),
  createProjectResponse: makeSelectProject(),
  createProjectLoading: makeSelectProjectLoading(),
  createProjectError: makeSelectProjectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetTechnologies: (evt) => {
      dispatch(getTechnologies(evt));
    },
    onCreateProject: (evt) => {
      dispatch(putProject(evt));
    },
    cleanPutProject: (evt) => {
      dispatch(cleanPutStates(evt));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'publishProjectPage', reducer });
const withSaga = injectSaga({ key: 'publishProjectPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PublishProjectPage);
