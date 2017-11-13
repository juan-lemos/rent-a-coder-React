import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ModifyForm from 'components/ModifyProjectComponents/ModifyForm';
import moment from 'moment';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectModifyProjectPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ModifyProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>ModifyProjectPage</title>
          <meta name="description" content="Description of ModifyProjectPage" />
        </Helmet>
        <ModifyForm
          handleDateChange={() => console.log('change date')}
          handleFieldChange={() => console.log('fieldChange')}
          handleSelectedTechnologies={() => console.log('click tech')}
          handleClickOnCreate={() => console.log('click create')}
          errorsInFields={{
            name: false,
            description: false,
            date: false,
            selectedTechnologies: false,
          }}
          technologies={[]}
          values={{
            name: 'nombre',
            description: 'description',
            date: moment(),
            selectedTechnologies: [{ value: 'element.id', label: 'element.name' }],
          }}
        />
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
