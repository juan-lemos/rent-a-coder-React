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
import { user } from './actions';
import { makeSelectUserData, makeSelectUserError } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class UserPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.onGetUser(this.props.match.params.userX);
  }

  render() {
    const {
      developer_score: developerScore,
      owner_score: ownerScore,
      gravatar_url: gravatarURL,
      projects_done: projectsDone,
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
            editable={false}
          />
          <Col sm={12} md={9} lg={9}>
            <Tabs defaultActiveKey={1} id="projects-tabs">
              <ProjectsTab eventKey={1} title="Proyectos Realizados" projects={projectsDone} editable={false} />
            </Tabs>
          </Col>
        </Row>
      </Grid>
    );
  }
}

UserPage.propTypes = {
  match: PropTypes.object,
  onGetUser: PropTypes.func,
  userData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
  userError: makeSelectUserError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetUser: (userId) => {
      dispatch(user(userId));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userPage', reducer });
const withSaga = injectSaga({ key: 'userPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserPage);
