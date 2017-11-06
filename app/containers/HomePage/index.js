import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ListPanels from 'components/HomeComponents/ListPanels';
import OfferModal from 'components/HomeComponents/OfferModal';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import LoadingIndicator from 'components/common/LoadingIndicator';

import reducer from './reducer';
import saga from './saga';
import {
  makeSelectProjects,
  makeSelectProjectsLoading,
  makeSelectProjectsError,
} from './selectors';

import {
  getProjects,
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

  handleOfferProject(project) {
    this.setState({
      selectedProjectOffer: project,
      showModalOffer: true,
    });
  }

  handleCloseModal(offer) {
    this.setState({ showModalOffer: false });
    if (offer !== undefined) {
      const offerToSend = offer;
      offerToSend.project_id = this.state.selectedProjectOffer.id;
      // send offer
    }
  }

  render() {
    let renderList;
    if (this.props.projectsLoading) {
      renderList = <LoadingIndicator />;
    } else if (this.props.projectsError) {
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
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <div>
          {renderList}
          <OfferModal
            show={this.state.showModalOffer}
            errorsInFields={this.state.errorsInFields}
            handleClose={(offer) => this.handleCloseModal(offer)}
            projectName={this.state.selectedProjectOffer.name}
          />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  projectsResponse: PropTypes.object,
  projectsLoading: PropTypes.bool,
  projectsError: PropTypes.bool,
  onGetProjects: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  projectsResponse: makeSelectProjects(),
  projectsLoading: makeSelectProjectsLoading(),
  projectsError: makeSelectProjectsError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetProjects: (evt) => {
      dispatch(getProjects(evt));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
