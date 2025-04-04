import React from 'react'
import InputField from "./InputField";
import Task from "./Task";

const TasksContainer = ({submitHandler, tasks})=> {
    return (
        <div>
			<InputField submitHandler={submitHandler}/>
            {
			tasks.map((obj)=> {
				return <Task key={obj.id} taskName={obj.task}/>
			})
			}
        </div>
    )
}

export default TasksContainer