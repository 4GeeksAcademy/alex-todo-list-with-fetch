import React from 'react'
import InputField from "./InputField";
import Task from "./Task";

const TasksContainer = ({submitHandler, tasks, handleDelete})=> {
    return (
        <div>
			<InputField submitHandler={submitHandler}/>
            {
			tasks.map((obj)=> {
				return <Task key={obj.id} handleDelete={handleDelete} taskName={obj.task} id={obj.id}/>
			})
			}
        </div>
    )
}

export default TasksContainer