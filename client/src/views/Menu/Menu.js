import React from 'react';
import {Dropdown} from 'react-bootstrap'
import styles from './Menu.module.css'
import {Link} from 'react-router-dom';

const menu = (props) => {
    return (
            <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic-button">
          Menu
        </Dropdown.Toggle>
      
        <Dropdown.Menu className={styles.menu}>
          <li className={styles.text}> <Link to="/">Home</Link></li>
          <li className={styles.text}> <Link to="/projects">Projects</Link></li>
          <li className={styles.text}> <Link to="/resume">Resume</Link></li>
        </Dropdown.Menu>
      </Dropdown>
    )
}

export default menu;