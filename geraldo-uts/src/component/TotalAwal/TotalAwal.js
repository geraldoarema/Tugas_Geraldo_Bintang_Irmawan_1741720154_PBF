import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class SubTotal extends Component {
  render() {
    return (
      <Row className='show-grid'>
        <Col md={6}>Total</Col>
        <Col md={6}>
          <strong>{`Rp.${this.props.price}`}</strong>
        </Col>
      </Row>
    );
  }
}
