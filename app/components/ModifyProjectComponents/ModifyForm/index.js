/**
*
* ModifyForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ModifyForm() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ModifyForm.propTypes = {

};

export default ModifyForm;
