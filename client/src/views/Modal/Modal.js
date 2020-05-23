import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import styles from './Modal.module.css';

const Example = (props) => {   
  
    return (
      <>
        <Button variant="primary" className={styles.button} onClick={props.setShow}>
          Contact Me
        </Button>
  
        <Modal show={props.show} onHide={props.setShow}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
                  <ul>
                      <li>Phone Number: 587-372-5093</li>
                      <li>Email: jesse93@protonmail.com</li>
                  </ul>
              </div>
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.setShow}>
              Close
            </Button>
            <Button variant="primary" onClick={props.setShow}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example;