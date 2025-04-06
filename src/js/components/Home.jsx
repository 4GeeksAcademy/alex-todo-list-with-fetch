import React, { useEffect, useState } from "react";

//include images into your bundle
import Title from "./Title";
import TasksContainer from "./TasksContainer";
import TaskCounter from "./TaskCounter";


const Home = () => {
	const [tasks, setTasks] = useState([])
	const [taskCounter, setTaskCounter] = useState(0)

	const submitHandler = (e) => {
		if (e.key === 'Enter') {
			if(e.target.value == '') {
				e.preventDefault()
				return null;
			}
			e.preventDefault()
			setTasks([...tasks, {id: Date.now(),task: e.target.value}])
			e.target.value = ''
			setTaskCounter((prev)=> prev + 1)

		}
	}

	const handleDelete = (e) => {
		setTaskCounter((prev)=> prev -1 )
		setTasks(()=> {
			return tasks.filter((obj)=> obj.id !== Number(e.target.id))
		})
	}


	return (
		<div className="container-fluid">
			<Title/>
			<TasksContainer submitHandler={submitHandler} handleDelete={handleDelete} tasks={tasks}/>
			<TaskCounter taskCounter={taskCounter} />
			
        </div>
	);
};

export default Home;