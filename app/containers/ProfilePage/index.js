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
import { profile } from './actions';
import { makeSelectUserData, makeSelectProfileError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';

export class ProfilePage extends React.PureComponent {

  componentWillMount() {
    this.props.onCreate({ ...this.values });
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
    } = this.props.userData;

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
          />
          <Col sm={12} md={9} lg={9}>
            <Tabs defaultActiveKey={1} id="projects-tabs">
              <ProjectsTab eventKey={1} title="Publicados" projects={uploadedProjects} />
              <ProjectsTab eventKey={2} title="Postulados" projects={projectsAsCandidate} />
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
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'profilePage', reducer });
const withSaga = injectSaga({ key: 'profilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfilePage);
