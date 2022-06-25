import React, { useState } from "react";
import Task from "./Task.jsx";

//create your first component
const TodoList = () => {

	// Tasks State
	const [tasks, setTasks] = useState([])
	const [inputValue, setInputValue] = useState('')
	const [deleteItemShowing, setDeleteItemShowing] = useState({
		isShowing: false,
		index: null
	})


	// Handle Input Value
	const handleInputChange = data => {
		setInputValue(data.target.value)
	}

	const handleAddTask = data => {
		if (data.key === 'Enter') {
			setTasks([...tasks, inputValue])
			setInputValue('')
		}
	}


	const handleDeleteTask = index => {
		setTasks(tasks.filter((e, i) => {
			return index !== i
		}))
	}


	return (
		<div className="vh-100 overflow-auto d-flex flex-column align-items-center bg-grey ">

			{/* Title */}
			<div className="pt-5 pb-3">
				<h1 className="fw-light text-muted">todos</h1>
			</div>

			<div className="bg-white row col-10 col-sm-8 col-md-6 col-lg-6 todo-container">
				{/* Add to task input */}
				<div className="p-0">
					<input value={inputValue}
						className="input-task w-100 px-5 py-3 my-1"
						placeholder="Add new task..."
						onChange={(data) => handleInputChange(data)}
						onKeyDown={(data) => handleAddTask(data)}
						type="text" />
					<hr />
				</div>

				{
					tasks.length > 0
						?
						tasks.map((task, index) => {
							return (
								<div
									key={index}
									onMouseOver={() => setDeleteItemShowing({ isShowing: true, index: index })}
									onMouseLeave={() => setDeleteItemShowing({ isShowing: false, index: null })}
								>
									<Task
										deleteItemShowing={deleteItemShowing}
										task={task}
										index={index}
										handleDeleteTask={handleDeleteTask}
									/>
								</div>
							)
						})
						:
						<>
							<h4
								className="p-5 text-center text-muted fw-light"
							>
								{`No tasks, add a task`}
							</h4>
							<hr />
						</>
				}

				<span className="text-muted py-2 fw-light"><small>
					{
						tasks.length > 0
							? `${tasks.length} item left`
							: `No have tasks pending`
					}
				</small></span>

			</div>
			<br />
			<br />
			<br />
		</div>
	);
};

export default TodoList;
