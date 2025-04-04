import React, { useState } from "react";

//include images into your bundle
import Title from "./Title";
import InputField from "./InputField";
import Task from "./Task";


//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([{id:'1', task:'bed	'}])
	
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
			<InputField submitHandler={submitHandler}/>
			{
			tasks.map((obj)=> {
				return <Task key={obj.id} taskName={obj.task}/>
			})
			}
        </div>
	);
};

export default Home;