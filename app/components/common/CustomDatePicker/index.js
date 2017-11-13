import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import './datepicker-cssmodules.min.css';

const DateDiv = styled.div`
  .datePickerStyle{
    background-color: #fff;
    border: 1px solid #cccccc;
    border-radius: 5px;
}
`;

function CustomDatePicker({ date, handleDateChange }) {
  return (
    <DateDiv>
      {<DatePicker
        className={'datePickerStyle'}
        selected={date}
        onChange={(selectedDate) => handleDateChange(selectedDate)}
      />}
    </DateDiv>
  );
}

CustomDatePicker.propTypes = {
  date: PropTypes.object,
  handleDateChange: PropTypes.func,
};

export default CustomDatePicker;
