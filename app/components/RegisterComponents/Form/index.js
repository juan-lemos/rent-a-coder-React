/**
*
* Form
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Form() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Form.propTypes = {

};

export default Form;
