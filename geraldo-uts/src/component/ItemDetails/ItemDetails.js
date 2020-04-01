import React, { Component } from 'react';
import { Button, Collapse, Media } from 'react-bootstrap';
import img1 from './baju.jpg';
import { Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className='item-details-button'
          bsStyle='link'
          onClick={() => this.setState({ open: !this.state.open })}>
          {this.state.open === false ? `See` : `Hide`} item details{' '}
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <well className='card mt-2'>
              <Media>
                <img
                  className='mt-2 mb-2'
                  width={100}
                  height={100}
                  alt='thumnail'
                  src={img1}
                />
                <Media.Body>
                  <p>Kaos Vespa terbuat dari bahan katun , warna hitam</p>
                  <Row className='rowket'>
                    <Col md={6}>
                      <strong>{`Rp.${this.props.price}`}</strong>
                      <br />
                      <strong className='harga'>{`Rp.${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}>Qty: 1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </well>
          </div>
        </Collapse>
      </div>
    );
  }
}
