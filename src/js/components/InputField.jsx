import React from 'react'

const InputField = ({submitHandler}) => {
   
    return (
        <div className='tasks-container text-center '>
            <div className="row input-section">
                <div className="col">
                    <form name='task-input'>
                        <input type='text' onKeyDown={submitHandler} className='border-1 rounded-2 p-3' placeholder='What needs to be done?' style={{width: '70%'}} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InputField