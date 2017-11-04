import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Tabs, Tab, Row, Col, Grid, Accordion, Panel } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ProfileInfo from 'components/ProfileInfo';
import { profile } from './actions';
import { makeSelectProfile, makeSelectProfileError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';

export class ProfilePage extends React.PureComponent {

  componentWillMount() {
    this.props.onCreate({ ...this.values });
  }

  profileInstance = (
    <Grid>
      <Row>
        <ProfileInfo
          name="John Doe"
          username="johndoe"
          gravatarURL="https://secure.gravatar.com/avatar/0002582f53c86ce642eec439f7bda89"
          contractorRating={3}
          hiredRating={2}
          email="john.doe@mail.com"
          phone="12345678"
          website="john.doe.com"
          city="Johndon"
          country="Doeland"
        />
        <Col sm={12} md={9} lg={9}>
          <Tabs defaultActiveKey={1} id="projects-tabs">
            <Tab eventKey={1} tabClassName="tab-projects" title="Publicados">
              <Accordion onSelect={this.handle}>
                <Panel header="Collapsible Group Item #1" eventKey="1">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                </Panel>
                <Panel header="Collapsible Group Item #2" eventKey="2">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                </Panel>
                <Panel header="Collapsible Group Item #3" eventKey="3">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                </Panel>
              </Accordion>
            </Tab>
            <Tab eventKey={2} tabClassName="tab-projects" title="Postulados">
              <Accordion onSelect={this.handle}>
                <Panel header="Collapsible Group Item #1" eventKey="1">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                </Panel>
                <Panel header="Collapsible Group Item #2" eventKey="2">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                </Panel>
              </Accordion>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Grid>
  );

  render() {
    return (
      <div>
        {this.profileInstance}
      </div>
    );
  }
}

ProfilePage.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profileResponse: makeSelectProfile(),
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
