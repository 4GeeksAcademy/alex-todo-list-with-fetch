import React, { useState } from "react";

//include images into your bundle
import Title from "./Title";
import TasksContainer from "./TasksContainer";


//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([])
	
	const submitHandler = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			setTasks([...tasks, {id: Date.now(),task: e.target.value}])
			e.target.value = ''
		}
	}
	return (
		<div className="container-fluid">
			<Title/>
			<TasksContainer submitHandler={submitHandler} tasks={tasks}/>
			
        </div>
	);
};

export default Home;