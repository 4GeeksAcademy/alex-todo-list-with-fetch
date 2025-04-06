import React, { useEffect, useState } from "react";

//include images into your bundle
import Title from "./Title";
import TasksContainer from "./TasksContainer";
import TaskCounter from "./TaskCounter";

const todoListUrl = 'https://playground.4geeks.com/todo'
let  user;


const Home = () => {
	const [tasks, setTasks] = useState([])
	const [taskCounter, setTaskCounter] = useState(0)
	const [user, setUser] = useState('')

	const createTask = async (task) => {
		const obj = {
			method: 'POST',
			body: JSON.stringify(task),
			headers: {
				"Content-Type": 'application/json'}
		}

		try {
			await fetch(`${todoListUrl}/todos/alex`, obj)
		} catch (error) {
			console.error(error)	
		}
	}

	const submitHandler = (e) => {
		if (e.key === 'Enter') {
			if(e.target.value == '') {
				e.preventDefault()
				return null;
			}
			e.preventDefault()
			const newTask = {
				label: e.target.value, 
				is_done: false, 
			}

			createTask(newTask)
			setTaskCounter((prev)=> prev + 1)
			e.target.value = ''

		}
	}
	
	const getUser = async (url) => {
		try {
			const response = await fetch(url)
			const data = await response.json()
			setUser(data.name)
			setTasks(data.todos)
			setTaskCounter(data.todos.length)
			
		} catch (error) {
			console.error(error)	
		}
	}

	
	useEffect(()=> {
			getUser(`${todoListUrl}/users/alex`)
	}, [])

	const handleDelete = (e) => {
		setTaskCounter((prev)=> prev -1 )
		// setTasks(()=> {
		// 	return tasks.filter((obj)=> obj.id !== Number(e.target.id))
		// })
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