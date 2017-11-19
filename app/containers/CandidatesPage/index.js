import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid } from 'react-bootstrap';
import LoadingIndicator from 'components/common/LoadingIndicator';
import ConfirmationModal from 'components/CandidatesComponents/ConfirmationModal';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CandidatesComponents from 'components/CandidatesComponents/CandidatesList';
import {
  makeSelectCandidates,
  makeSelectCandidatesLoading,
  makeSelectCandidatesError,
  makeSelectSelectCandidate,
  makeSelectSelectCandidateError,
  makeSelectSelectCandidateLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import {
  getCandidates,
  putSelectCandidate,
  cleanPutSelectCandidateerror,
} from './actions';


export class CandidatesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedOffer: {},
    };
  }

  componentWillMount() {
    this.props.onGetCandidatesOffers(this.props.match.params.proyX);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.selectCandidateLoading && nextProps.selectCandidateResponse != null) {
      this.props.history.push('/profile');
      this.props.onCleanSelectCandidateOffer();
    }
  }

  handleSelectCandidate(offer) {
    this.setState({ showModal: true, selectedOffer: offer });
  }

  handleViewCandidateProfile(offer) {
    this.props.history.push(`/user/${offer.candidate.id}`);
  }

  handleOnConfirm() {
    this.props.onSelectCandidateOffer({
      developer_id: this.state.selectedOffer.candidate.id,
      projectId: this.props.match.params.proyX,
    });
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
          viewCandidateProfile={(offer) => this.handleViewCandidateProfile(offer)}
          selectCandidate={(offer) => this.handleSelectCandidate(offer)}
        />);
    }

    let renderModal;
    if (this.state.showModal) {
      renderModal =
        (<ConfirmationModal
          offer={this.state.selectedOffer}
          onCancel={() => this.setState({ showModal: false })}
          onConfirm={() => this.handleOnConfirm()}
        />);
    } else {
      renderModal = null;
    }

    let render;
    if (this.props.selectCandidateLoading) {
      render = <LoadingIndicator />;
    } else if (this.props.selectCandidateError != null) {
      render = <div>{'Error!'}</div>;
    } else {
      render = (
        <div>
          {renderOffers}
          {renderModal}
        </div>
      );
    }

    return (
      <Grid>
        <Helmet>
          <title>CandidatesPage</title>
          <meta name="description" content="Description of CandidatesPage" />
        </Helmet>
        <h1>{'Candidatos'}</h1>
        {render}
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
  onSelectCandidateOffer: PropTypes.func,
  selectCandidateLoading: PropTypes.bool,
  selectCandidateError: PropTypes.object,
  onCleanSelectCandidateOffer: PropTypes.func,
  history: PropTypes.object,
  selectCandidateResponse: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  candidatesOffersResponse: makeSelectCandidates(),
  candidatesOffersLoading: makeSelectCandidatesLoading(),
  candidatesOffersError: makeSelectCandidatesError(),
  selectCandidateResponse: makeSelectSelectCandidate(),
  selectCandidateError: makeSelectSelectCandidateError(),
  selectCandidateLoading: makeSelectSelectCandidateLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetCandidatesOffers: (evt) => {
      dispatch(getCandidates(evt));
    },
    onSelectCandidateOffer: (evt) => {
      dispatch(putSelectCandidate(evt));
    },
    onCleanSelectCandidateOffer: (evt) => {
      dispatch(cleanPutSelectCandidateerror(evt));
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
