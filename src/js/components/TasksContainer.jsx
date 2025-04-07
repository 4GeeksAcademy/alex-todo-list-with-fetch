import React from 'react'
import InputField from "./InputField";
import Task from "./Task";

const TasksContainer = ({submitHandler, tasks, handleDelete})=> {
    return (
        <div>
			<InputField submitHandler={submitHandler}/>
            {

			tasks && tasks.map((item)=> {
				return <Task id={item.id} handleDelete={handleDelete} taskName={item.label} key={item.id} />
			})
			}
        </div>
    )
}

export default TasksContainer