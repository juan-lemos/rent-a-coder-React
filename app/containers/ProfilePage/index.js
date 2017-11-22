import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Tabs, Row, Col, Grid } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ProfileInfo from 'components/ProfileComponents/ProfileInfo';
import ProjectsTab from 'components/ProfileComponents/ProjectsTab';
import RedirectNoLogged from 'components/RedirectNoLogged';
import RatingModal from 'components/ProfileComponents/RatingModal';
import { profile, putProjectRate } from './actions';
import { makeSelectUserData, makeSelectProfileError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';


export class ProfilePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedProjectId: null,
      projectRating: 4,
    };
  }

  componentWillMount() {
    this.props.onCreate({ ...this.values });
  }

  handleClickEditProject(projectId) {
    this.props.history.push(`/projectEdit/${projectId}`);
  }

  handleClickAssignProject(projectId) {
    this.props.history.push(`/candidates/${projectId}`);
  }

  handleClickRateProject(projectId) {
    this.setState({ showModal: true, selectedProjectId: projectId });
  }

  handleOnRateChange(rating) {
    this.setState({ projectRating: rating });
  }

  handleOnRateConfirm() {
    this.props.onProjectRateConfirm({
      developerScore: this.state.projectRating,
      projectId: this.state.selectedProjectId,
    });
    this.setState({
      showModal: false,
      projectRating: 0,
    });
  }

  render() {
    const {
      developer_score: developerScore,
      owner_score: ownerScore,
      gravatar_url: gravatarURL,
      uploaded_projects: uploadedProjects,
      projects_as_candidate: projectsAsCandidate,
      city,
      country,
      email,
      name,
      nickname,
      tel,
      web,
      technologies,
    } = this.props.userData;

    let renderModal;
    if (this.state.showModal) {
      renderModal =
        (<RatingModal
          onCancel={() => this.setState({ showModal: false })}
          onConfirm={() => this.handleOnRateConfirm()}
          onRatingChange={(rating) => this.handleOnRateChange(rating)}
        />);
    } else {
      renderModal = null;
    }

    return (
      <Grid>
        <Row>
          <ProfileInfo
            name={name}
            username={nickname}
            gravatarURL={gravatarURL}
            contractorRating={ownerScore}
            hiredRating={developerScore}
            email={email}
            phone={tel}
            website={web}
            city={city}
            country={country}
            technologies={technologies}
            editable
          />
          <Col sm={12} md={9} lg={9}>
            <Tabs defaultActiveKey={1} id="projects-tabs">
              {renderModal}
              <ProjectsTab
                eventKey={1}
                title="Publicados"
                projects={uploadedProjects}
                handleClickEditProject={(projectId) => this.handleClickEditProject(projectId)}
                handleClickAssignProject={(projectId) => this.handleClickAssignProject(projectId)}
                handleClickRateProject={(projectId) => this.handleClickRateProject(projectId)}
                editable
              />
              <ProjectsTab eventKey={2} title="Postulados" projects={projectsAsCandidate} editable={false} />
            </Tabs>
          </Col>
        </Row>
      </Grid>
    );
  }
}

ProfilePage.propTypes = {
  onCreate: PropTypes.func.isRequired,
  userData: PropTypes.object,
  history: PropTypes.object,
  onProjectRateConfirm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
  profileError: makeSelectProfileError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCreate: (evt) => {
      dispatch(profile(evt));
    },
    onProjectRateConfirm: (evt) => {
      dispatch(putProjectRate(evt));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'profilePage', reducer });
const withSaga = injectSaga({ key: 'profilePage', saga });

export default RedirectNoLogged(compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfilePage));
