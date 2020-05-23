import React from 'react';
import Menu from '../Menu/Menu'
import styles from '../Layout/Layout.module.css'

const layout = (props) => {
return(
    <div className='container'>
    <div className={styles.dropdownToggle}>
       <Menu/>
    </div>
{props.children}
</div>
)
}

export default layout