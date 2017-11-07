import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ReactStars from 'react-stars';
import { ListGroup, ListGroupItem, Row, Col, Button, Grid } from 'react-bootstrap';
import styled from 'styled-components';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCandidatesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const NameAndStarts = styled.span`
  display: flex;
  align-items: center;
`;

const NameItem = styled.span`
  color: #000;
  margin-right: 20px;
  font-size: 1.2em;
  font-weight: bold;
`;


export class CandidatesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
        <Helmet>
          <title>CandidatesPage</title>
          <meta name="description" content="Description of CandidatesPage" />
        </Helmet>
        <h1>{'Candidatos:'}</h1>
        <ListGroup>
          <ListGroupItem>
            <NameAndStarts>
              <NameItem>
                {'Nombre postulado'}
              </NameItem>
              <span>
                <ReactStars count={5} value={2} className="rating-container" edit={false} size={20} />
              </span>
            </NameAndStarts>
            <Row>
              <Col xs={12} sm={6}>
                <Row>
                  {'U$S: 50'}
                </Row>
                <Row>
                  {'Diás estimados: 50'}
                </Row>
              </Col>
              <Col xs={12} sm={6}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button style={{ marginRight: '10px' }}>
                    {'Ver perfil'}
                  </Button>
                  <Button bsStyle="primary">
                    {'Asignar'}
                  </Button>
                </div>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>...</ListGroupItem>
        </ListGroup>
      </Grid>
    );
  }
}

CandidatesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  candidatespage: makeSelectCandidatesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'candidatesPage', reducer });
const withSaga = injectSaga({ key: 'candidatesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CandidatesPage);
