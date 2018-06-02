import React, { Component } from 'react'
import {Row, Col, Preloader} from 'react-materialize'
import ReactModal from 'react-modal'

import '../styles/Search.css'

class SpinnerModal extends Component {
  render () {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}
        className='modal-waiting'
        overlayClassName='overlay'>
        <Row>
          <Col s={12}>
            <Preloader size='big' flashing className='spinner' />
            <p>{this.props.message}</p>
          </Col>
        </Row>
      </ReactModal>
    )
  }
}

export default SpinnerModal
