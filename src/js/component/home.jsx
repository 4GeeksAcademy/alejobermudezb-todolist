import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("")
	const [todo,setTodo] = useState([])


	return (
		<div className="text-center">
			<h1>My To do</h1>
			<div>
			<ul className="list-group">
				<li className="list-group-item">
					 <input 
					 	type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodo(todo.concat([inputValue]));
								setInputValue("");
							}
						}} 
						placeholder="What do you need to do?">
					 </input>
				 </li>
				 {todo.map((item, index) => (
					<li className="list-group-item d-flex justify-content-between">
						<span className="todo_list_task">
							{item}
						</span>
						<span className="todoList_delete"> 
							<i className="fa fa-trash" 
						onClick={() => setTodo(todo.filter((t, currentIndex) => index != currentIndex))}></i>
						</span> 
						
					</li>
				 ))}
			</ul>
			<div>
				 {todo.length} task
			</div>
			</div>
			
		</div>
	);
};

export default Home;
