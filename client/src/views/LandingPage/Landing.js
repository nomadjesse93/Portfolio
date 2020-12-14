import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import styles from './Landing.module.css';
import Modal from '../Modal/Modal';

export default class Landing extends Component {
  state = {
    showModal: false,
  };

  setShow = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <div className='container-fluid'>
        <Jumbotron className={styles.JumboTron}>
          <h1 id='name' className='display-3'>
            Jesse Sanderson
          </h1>
          <p className='lead'>Web Developer, Programmer, Tech Enthusiast</p>
          <p className='lead'>
            <Modal setShow={this.setShow} show={this.state.showModal} />
          </p>
        </Jumbotron>
      </div>
    );
  }
}
