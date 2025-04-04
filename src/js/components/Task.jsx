import React from 'react'
import styles from '../../styles/button.module.css'
const Task = ({taskName}) => {
    return (
        <div className='row'>
            <div className="col d-flex justify-content-center">
                <div className='d-flex pt-3' style={{width:'70%'}}>
                <span className='px-3' style={{minWidth:'300px'}}> <p >{taskName}</p></span> <button className={styles.taskBtn}>✏️</button> <button className={styles.taskBtn}>❌</button>
                </div>
            </div>
        </div>
    )
}

export default Task