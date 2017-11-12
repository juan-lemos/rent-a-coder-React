import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Button, Col, Row, Label } from 'react-bootstrap';

function BodyPanel({
  description,
  employerName,
  starts,
  tags,
  handleOfferProject }) {
  const tagsRender = tags.map((element, i) => {
    const keyTag = `tag${i}`;
    return (
      <span key={keyTag} style={{ marginRight: '5px' }}>
        <Label>{element.name}</Label>
      </span>
    );
  }
  );

  return (
    <div>
      <Row>
        <Col xs={12} sm={6}>
          <div style={{ fontWeight: 'bold' }}>{'Descripción:'}</div>
          {description}
          <div style={{ fontWeight: 'bold', marginTop: '10px' }}>{'Tecnologías:'}</div>
          <div>
            {tags.length > 0 ? tagsRender : <span>{'Sin especificar'}</span>}
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div style={{ fontWeight: 'bold', marginTop: '10px' }}>{'Contratante:'}</div>
          <div
            style={{ fontSize: '1em' }}
          >
            {employerName}
          </div>
          <div>
            <ReactStars count={5} value={starts} className="rating-container" edit={false} size={18} />
          </div>
          <Button onClick={() => handleOfferProject()}>Ofertar</Button>
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
  handleOfferProject: PropTypes.func,
};

export default BodyPanel;
