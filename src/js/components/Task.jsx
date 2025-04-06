import React from 'react'
import styles from '../../styles/button.module.css'

const Task = ({taskName, handleDelete, id}) => {
    if(taskName === '') return null;
    
    return (
        <div className='row'>
            <div className="col d-flex justify-content-center">
                <div className={`${styles.taskCard} d-flex pt-3 border-top`} style={{width:'70%'}}>
                    <span className='px-3' style={{minWidth:'300px'}}> <p >{taskName}</p></span> 
                    <button id={id} onClick={(e)=> handleDelete(e)} className={`${styles.taskBtn}`}>❌</button>
                </div>
            </div>
        </div>
    )
}

export default Task