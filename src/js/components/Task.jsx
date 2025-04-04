import React from 'react'

const Task = ({taskName}) => {
    return (
        <div className='row'>
            <div className="col">
                <p>{taskName}</p> <button>modify</button> <button>delete</button>
            </div>
        </div>
    )
}

export default Task