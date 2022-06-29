import React, { useEffect, useState } from "react";
// Components import ------------------------------------------------------------
import Task from "./Task.jsx";
import Title from "./Title.jsx";
import AddTaskInput from "./AddTaskInput.jsx";
import NoTaskMessage from "./NoTaskMessage.jsx";
import TaskCounter from "./TaskCounter.jsx";

//Helpers
import { getTasks, updateTasks } from "../helpers/getTasks.js";


//create your first component
const TodoList = () => {

	// Tasks State
	const [tasks, setTasks] = useState([])
	const [inputValue, setInputValue] = useState('')

	// Handle Show or unShow delete task button and button position.
	const [deleteItemShowing, setDeleteItemShowing] = useState({
		index: null
	})

	//Initial load data
	useEffect(() => {
		getTasks(process.env.API_URL)
			.then(res => {
				if (res[0].label !== 'InvalidNameValue') {
					setTasks(res)
				} else {
					setTasks([])
				}
			})
	}, [])

	// save new task in backend
	useEffect(() => {
		const sample = [{ label: 'InvalidNameValue', done: false }]
		updateTasks(process.env.API_URL, tasks.length === 0 ? sample : tasks)
	}, [tasks])

	// Set input value into state
	const handleInputChange = data => {
		setInputValue(data.target.value)
	}

	// Add new task with input value when user press Enter key
	const handleAddTask = data => {
		if (data.key === 'Enter' && data.target.value !== '') {
			setTasks([...tasks, {
				label: data.target.value,
				done: false
			}])
			setInputValue('')
		}
	}

	// Remove selected Task by Index returning any others that no-match in array
	const handleDeleteTask = index => {
		setTasks(tasks.filter((e, i) => {
			return index !== i
		}))
	}

	return (
		<div className="vh-100 d-flex flex-column align-items-center bg-grey">

			<Title title={"TODO's"} />

			<div className="bg-white row col-10 col-sm-8 col-md-8 col-lg-8 col-xl-6 todo-container">

				<AddTaskInput
					inputValue={inputValue}
					handleInputChange={handleInputChange}
					handleAddTask={handleAddTask}
				/>

				{
					tasks.length > 0
						? // if the user have tasks
						<div className="task-list p-0">
							{
								tasks.map((task, index) => {
									return (
										<Task
											key={index}
											task={task}
											index={index}
											deleteItemShowing={deleteItemShowing}
											setDeleteItemShowing={setDeleteItemShowing}
											handleDeleteTask={handleDeleteTask}
										/>
									)
								})
							}
						</div>
						: // if user dont have any task
						<NoTaskMessage
							message={'No tasks, add a task'}
						/>
				}

				<TaskCounter
					tasks={tasks}
				/>

			</div>
		</div>
	);
};


export default TodoList;
