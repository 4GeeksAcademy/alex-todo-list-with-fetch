import React, { useEffect, useState } from "react";
import Title from "./Title";
import TasksContainer from "./TasksContainer";
import TaskCounter from "./TaskCounter";

const todoListUrl = 'https://playground.4geeks.com/todo';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskCounter, setTaskCounter] = useState(0);

  const createTask = async (task) => {
    try {
      await fetch(`${todoListUrl}/todos/alex`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await getUser(`${todoListUrl}/users/alex`); 
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e) => { 
    if (e.key === 'Enter') {
      if (e.target.value === '') {
        e.preventDefault();
        return null;
      }
      e.preventDefault();
      const newTask = {
        label: e.target.value,
        is_done: false,
      };
      await createTask(newTask);
      e.target.value = '';
    }
  };

  const getUser = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTasks(data.todos);
      setTaskCounter(data.todos.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser(`${todoListUrl}/users/alex`);
  }, [taskCounter]); 

  const deleteTask = async (id) => {
    try {
      await fetch(`${todoListUrl}/todos/${id}`, { method: 'DELETE' });
      await getUser(`${todoListUrl}/users/alex`); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e) => { 
    const idToDelete = parseInt(e.target.id);
    await deleteTask(idToDelete); 
  };

  return (
    <div className="container-fluid">
      <Title />
      <TasksContainer submitHandler={submitHandler} handleDelete={handleDelete} tasks={tasks} />
      <TaskCounter taskCounter={taskCounter} />
    </div>
  );
};

export default Home;