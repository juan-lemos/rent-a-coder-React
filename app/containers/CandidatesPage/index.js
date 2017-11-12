import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid } from 'react-bootstrap';
import LoadingIndicator from 'components/common/LoadingIndicator';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CandidatesComponents from 'components/CandidatesComponents/CandidatesList';
import {
  makeSelectCandidates,
  makeSelectCandidatesLoading,
  makeSelectCandidatesError,
  // makeSelectSelectCandidate,
  // makeSelectSelectCandidateError,
  // makeSelectSelectCandidateLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import {
  getCandidates,
  // putSelectCandidate,
} from './actions';


export class CandidatesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.onGetCandidatesOffers(this.props.match.params.proyX);
  }

  handleSelectCandidate(candidateId) {
    console.log(`selected candidate ${candidateId}`);
  }

  handleViewCandidateProfile(candidateId) {
    console.log(`view profile ${candidateId}`);
  }


  render() {
    let renderOffers;
    if (this.props.candidatesOffersLoading) {
      renderOffers = <LoadingIndicator />;
    } else if (this.props.candidatesOffersError) {
      renderOffers = <div> Error! </div>;
    } else if (this.props.candidatesOffersResponse != null) {
      renderOffers =
        (<CandidatesComponents
          offers={this.props.candidatesOffersResponse.offers}
          viewCandidateProfile={(id) => this.handleViewCandidateProfile(id)}
          selectCandidate={(id) => this.handleSelectCandidate(id)}
        />);
    }

    return (
      <Grid>
        <Helmet>
          <title>CandidatesPage</title>
          <meta name="description" content="Description of CandidatesPage" />
        </Helmet>
        <h1>{'Candidatos:'}</h1>
        {renderOffers}

      </Grid>
    );
  }
}

CandidatesPage.propTypes = {
  match: PropTypes.object,
  onGetCandidatesOffers: PropTypes.func,
  candidatesOffersResponse: PropTypes.object,
  candidatesOffersLoading: PropTypes.bool,
  candidatesOffersError: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  candidatesOffersResponse: makeSelectCandidates(),
  candidatesOffersLoading: makeSelectCandidatesLoading(),
  candidatesOffersError: makeSelectCandidatesError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetCandidatesOffers: (evt) => {
      dispatch(getCandidates(evt));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'candidatesPage', reducer });
const withSaga = injectSaga({ key: 'candidatesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CandidatesPage);
