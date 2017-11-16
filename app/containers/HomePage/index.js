import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid } from 'react-bootstrap';

import ListPanels from 'components/HomeComponents/ListPanels';
import OfferModal from 'components/HomeComponents/OfferModal';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import LoadingIndicator from 'components/common/LoadingIndicator';
import RedirectNoLogged from 'components/RedirectNoLogged';


import reducer from './reducer';
import saga from './saga';
import {
  makeSelectProjects,
  makeSelectProjectsLoading,
  makeSelectProjectsError,
  makeSelectOffer,
  makeSelectOfferLoading,
  makeSelectOfferError,
} from './selectors';

import {
  getProjects,
  putOffer,
  cleanPutOffer,
} from './actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      errorsInFields: {
        cost: false,
        estimated_time: false,
      },
      selectedProjectOffer: {},
      showModalOffer: false,
    };
  }

  componentWillMount() {
    this.props.onGetProjects();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.offerResponse != null) {
      this.setState({ showModalOffer: false, errorsInFields: { cost: false, estimated_time: false } });
      this.props.cleanOffer();
      this.props.onGetProjects();
    } else if (nextProps.offerError == null) {
      this.setState({ errorsInFields: { cost: false, estimated_time: false } });
    }
    if (nextProps.projectsError !== null) {
      if (nextProps.projectsError.errors !== undefined
        && nextProps.projectsError.errors[0] !== undefined) {
        this.props.history.push('/login');
      }
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.offerError != null) {
      let propertyName;
      let property;
      const properties = this.state.errorsInFields;
      for (property in properties) {// eslint-disable-line 
        properties[property] = false;
      }
      for (propertyName in nextProps.offerError.errors) {// eslint-disable-line 
        if (properties[propertyName] !== undefined) {
          properties[propertyName] = true;
        }
      }
    }
  }

  handleOfferProject(project) {
    this.setState({
      selectedProjectOffer: project,
      showModalOffer: true,
    });
  }

  handleCloseModal(offer) {
    if (offer !== undefined) {
      const offerToSend = offer;
      offerToSend.project_id = this.state.selectedProjectOffer.id;
      this.props.onOffer(offerToSend);
    } else {
      this.setState({
        showModalOffer: false,
      });
      this.props.cleanOffer();
    }
  }

  render() {
    let renderList;
    if (this.props.projectsLoading) {
      renderList = <LoadingIndicator />;
    } else if (this.props.projectsError !== null) {
      renderList = <div>Error Loading</div>;
    } else if (this.props.projectsResponse != null) {
      renderList = (
        <ListPanels
          handleOfferProject={(project) => this.handleOfferProject(project)}
          projects={this.props.projectsResponse.projects}
        />
      );
    }
    return (
      <Grid>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <h1>{'Proyectos sin ofertar'}</h1>
        <div>
          {renderList}
          <OfferModal
            show={this.state.showModalOffer}
            errorsInFields={this.state.errorsInFields}
            handleClose={(offer) => this.handleCloseModal(offer)}
            projectName={this.state.selectedProjectOffer.name}
          />
        </div>
      </Grid >
    );
  }
}

HomePage.propTypes = {
  projectsResponse: PropTypes.object,
  projectsLoading: PropTypes.bool,
  projectsError: PropTypes.object,
  onGetProjects: PropTypes.func,
  onOffer: PropTypes.func,
  offerResponse: PropTypes.object,
  cleanOffer: PropTypes.func,
  history: PropTypes.object,
  offerError: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  projectsResponse: makeSelectProjects(),
  projectsLoading: makeSelectProjectsLoading(),
  projectsError: makeSelectProjectsError(),
  offerResponse: makeSelectOffer(),
  offerLoading: makeSelectOfferLoading(),
  offerError: makeSelectOfferError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetProjects: (evt) => {
      dispatch(getProjects(evt));
    },
    onOffer: (evt) => {
      dispatch(putOffer(evt));
    },
    cleanOffer: (evt) => {
      dispatch(cleanPutOffer(evt));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default RedirectNoLogged(compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage));
