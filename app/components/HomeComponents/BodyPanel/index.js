import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Button, Col, Row, Label } from 'react-bootstrap';

function BodyPanel({
  description,
  employerName,
  starts,
  tags,
  handleOffer }) {
  const tagsRender = tags.map((element, i) => {
    const keyTag = `tag${i}`;
    return (
      <span key={keyTag} style={{ marginRight: '5px' }}>
        <Label>{element}</Label>
      </span>
    );
  }
  );

  return (
    <div>
      <Row>
        <Col xs={12} sm={6}>
          {description}
          <div style={{ fontWeight: 'bold' }}> Tecnologías: </div>
          <div>
            {tagsRender}
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <span
            style={{ fontWeight: 'bold', fontSize: '1.2em' }}
          >
            {employerName}
          </span>
          <ReactStars count={5} value={starts} className="rating-container" edit={false} size={28} />
          <Button onClick={() => handleOffer()}>Ofertar</Button>
        </Col>
      </Row>
    </div>
  );
}

BodyPanel.propTypes = {
  description: PropTypes.string,
  employerName: PropTypes.string,
  starts: PropTypes.number,
  tags: PropTypes.array,
  handleOffer: PropTypes.func,
};

export default BodyPanel;
