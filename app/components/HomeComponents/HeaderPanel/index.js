import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const arrowImage = require('../../../images/black_arrow.png');

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap ;
  align-items: center;
  justify-content: space-between;
`;

const ContainerNameAndDeadLine = styled.span`
  display: flex;
  flex-wrap: wrap ;
  align-items: baseline;

`;

const NameItem = styled.span`
  color: #000;
  margin-right: 20px;
  font-size: 1.5em;
  font-weight: bold;
`;

const DeadlineItem = styled.span`
  color: #A9A9A9;
  margin-right: 20px;
  font-size: 0.8em;
`;


function HeaderPanel({ name, deadline, isOpen }) {
  const rotate = isOpen ? '' : '-';
  return (
    <Wrapper>
      <ContainerNameAndDeadLine>
        <NameItem>
          {name}
        </NameItem>
        <DeadlineItem>
          {deadline}
        </DeadlineItem>
      </ContainerNameAndDeadLine>
      <img
        alt="arrow"
        style={{ height: '1.5em', transform: `rotate(${rotate}90deg)` }}
        src={arrowImage}
      />
    </Wrapper>
  );
}

HeaderPanel.propTypes = {
  name: PropTypes.string,
  deadline: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default HeaderPanel;
