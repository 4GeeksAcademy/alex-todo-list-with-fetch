import React from 'react'


const TaskCounter = ({taskCounter}) => {
    return (
        <div className='row'>
            <div className="col d-flex justify-content-center">
                <p style={{width:'70%'}}>{taskCounter > 0 ? `You have ${taskCounter} pending tasks` : 'There are no pending tasks'}  </p>
            </div>
        </div>
    )
}


export default TaskCounter