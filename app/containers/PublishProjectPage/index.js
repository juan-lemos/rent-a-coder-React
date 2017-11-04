/**
 *
 * PublishProjectPage
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
import makeSelectPublishProjectPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class PublishProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>PublishProjectPage</title>
          <meta name="description" content="Description of PublishProjectPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

PublishProjectPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  publishprojectpage: makeSelectPublishProjectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'publishProjectPage', reducer });
const withSaga = injectSaga({ key: 'publishProjectPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PublishProjectPage);
