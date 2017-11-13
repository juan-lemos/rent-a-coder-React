/**
 *
 * ModifyProjectPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectModifyProjectPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class ModifyProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>ModifyProjectPage</title>
          <meta name="description" content="Description of ModifyProjectPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ModifyProjectPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  modifyprojectpage: makeSelectModifyProjectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'modifyProjectPage', reducer });
const withSaga = injectSaga({ key: 'modifyProjectPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ModifyProjectPage);
