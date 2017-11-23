import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Tabs, Row, Col, Grid } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ProfileInfo from 'components/ProfileComponents/ProfileInfo';
import ProjectsTab from 'components/ProfileComponents/ProjectsTab';
import RedirectNoLogged from 'components/RedirectNoLogged';
import RatingModal from 'components/ProfileComponents/RatingModal';
import { profile, putOwnedProjectRate, putDevelopedProjectRate } from './actions';
import { makeSelectUserData, makeSelectProfileError, makeSelectLoadingPut } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';


export class ProfilePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedProjectId: null,
      projectRating: 0,
      ratingAsOwner: null,
    };
    this.waitingPutResponse = false;
  }

  componentWillMount() {
    this.props.getProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loadingPut && this.waitingPutResponse) {
      this.waitingPutResponse = false;
      this.props.getProfile();
    }
  }

  handleClickEditProject(projectId) {
    this.props.history.push(`/projectEdit/${projectId}`);
  }

  handleClickAssignProject(projectId) {
    this.props.history.push(`/candidates/${projectId}`);
  }

  handleClickRateProject(projectId, ratingAsOwner) {
    this.setState({ showModal: true, selectedProjectId: projectId, ratingAsOwner });
  }

  handleOnRateChange(rating) {
    this.setState({ projectRating: rating });
  }

  handleOnRateConfirm() {
    if (this.state.ratingAsOwner) {
      this.props.onOwnedProjectRateConfirm({
        developerScore: this.state.projectRating,
        projectId: this.state.selectedProjectId,
      });
    } else {
      this.props.onDevelopedProjectRateConfirm({
        ownerScore: this.state.projectRating,
        projectId: this.state.selectedProjectId,
      });
    }

    this.setState({
      showModal: false,
      projectRating: 0,
      ratingAsOwner: null,
    });

    this.waitingPutResponse = true;
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
        <Helmet>
          <title>Perfil</title>
          <meta name="description" content="Description of CandidatesPage" />
        </Helmet>
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
                handleClickRateProject={(projectId) => this.handleClickRateProject(projectId, true)}
                access="owner"
              />
              <ProjectsTab
                eventKey={2}
                title="Postulados"
                projects={projectsAsCandidate}
                access="developer"
                handleClickRateProject={(projectId) => this.handleClickRateProject(projectId, false)}
              />
            </Tabs>
          </Col>
        </Row>
      </Grid>
    );
  }
}

ProfilePage.propTypes = {
  getProfile: PropTypes.func.isRequired,
  userData: PropTypes.object,
  history: PropTypes.object,
  onOwnedProjectRateConfirm: PropTypes.func,
  onDevelopedProjectRateConfirm: PropTypes.func,
  loadingPut: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
  profileError: makeSelectProfileError(),
  loadingPut: makeSelectLoadingPut(),
});

function mapDispatchToProps(dispatch) {
  return {
    getProfile: (evt) => {
      dispatch(profile(evt));
    },
    onOwnedProjectRateConfirm: (evt) => {
      dispatch(putOwnedProjectRate(evt));
    },
    onDevelopedProjectRateConfirm: (evt) => {
      dispatch(putDevelopedProjectRate(evt));
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
