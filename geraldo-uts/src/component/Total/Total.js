import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class EstimatedTotal extends Component {
  render() {
    return (
      <Row className='show-grid'>
        <Col md={6}>
          <h3>Total Hrg.</h3>
        </Col>
        <Col md={6}>
          <h2>{`Rp.${this.props.price}`}</h2>
        </Col>
      </Row>
    );
  }
}
