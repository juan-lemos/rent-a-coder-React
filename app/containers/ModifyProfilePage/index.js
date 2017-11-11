import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectModifyProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';


const Container = styled.div`
max-width : 500px;
margin : auto;
`;

export class ModifyProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>ModifyProfilePage</title>
          <meta name="description" content="Description of ModifyProfilePage" />
        </Helmet>
        <Container>

        </Container>
      </div>
    );
  }
}

ModifyProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  modifyprofilepage: makeSelectModifyProfilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'modifyProfilePage', reducer });
const withSaga = injectSaga({ key: 'modifyProfilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ModifyProfilePage);
