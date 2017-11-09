import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CandidatesComponents from 'components/CandidatesComponents/CandidatesList';
import makeSelectCandidatesPage from './selectors';
import reducer from './reducer';
import saga from './saga';


export class CandidatesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  mistivar = 32;
  handleSelectCandidate(candidateId) {
    console.log(`selected candidate ${candidateId} ${this.mistivar}`);
  }

  handleViewCandidateProfile(candidateId) {
    console.log(`view profile ${candidateId} ${this.mistivar}`);
  }

  render() {
    return (
      <Grid>
        <Helmet>
          <title>CandidatesPage</title>
          <meta name="description" content="Description of CandidatesPage" />
        </Helmet>
        <h1>{'Candidatos:'}</h1>
        <CandidatesComponents
          candidates={[]}
          viewCandidateProfile={(id) => this.handleViewCandidateProfile(id)}
          selectCandidate={(id) => this.handleSelectCandidate(id)}
        />
      </Grid>
    );
  }
}

CandidatesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  candidatespage: makeSelectCandidatesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
