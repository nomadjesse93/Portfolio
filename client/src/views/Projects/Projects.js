import React from 'react';
import styles from './Projects.module.css'; 
import Card from './ProjectCards/Card'
const projects = () => {
    return(
        <div className={styles.container}>
          <div><Card/></div>
          <div><Card/></div>
          <div><Card/></div>
          <div><Card/></div>
        </div>
    )
}

export default projects