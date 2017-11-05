import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ProjectForm from 'components/PublishProjectComponents/ProjectForm';
import moment from 'moment';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';


import makeSelectPublishProjectPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class PublishProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      technologies: [
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
      ],
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

  handleDateChange(date) {
    this.values.deadline = `${date.year()}\\${date.month() + 1}\\${date.date()}`;
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
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>PublishProjectPage</title>
          <meta name="description" content="Description of PublishProjectPage" />
        </Helmet>
        <ProjectForm
          date={this.state.startDate}
          handleDateChange={(date) => this.handleDateChange(date)}
          handleFieldChange={(event) => this.handleFieldChange(event)}
          handleSelectedTechnologies={(val) => this.handleSelectedTechnologies(val)}
          handleClickOnCreate={() => this.handleClickOnCreate()}
          technologies={this.state.technologies}
          selectedTechnologies={this.state.selectedTechnologies}
          errorsInFields={this.state.errorsInFields}
        />
      </div >
    );
  }
}

PublishProjectPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  publishprojectpage: makeSelectPublishProjectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
