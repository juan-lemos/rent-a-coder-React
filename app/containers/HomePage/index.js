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


  componentWillMount() {
    this.props.onGetProjects();
  }

  render() {
    let renderList;
    if (this.props.projectsLoading) {
      renderList = <LoadingIndicator />;
    } else if (this.props.projectsError) {
      renderList = <div>Error Loading</div>;
    } else if (this.props.projectsResponse != null) {
      renderList = (
        <ListPanels projects={this.props.projectsResponse.projects} />
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
          <OfferModal />
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
