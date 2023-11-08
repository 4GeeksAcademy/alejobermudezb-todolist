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
			<ul>
				<li>
					 <input 
					 	type="text"
						onChange={(e) => setInputValue(e.target.Value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodo(todo.concat([inputValue]));
								setInputValue("");
							}
						}} 
						placeholder="what do yuo need to do?">
					 </input>
				 </li>
				 {todo.map((item, index) => (
					<li>
						{item} <i class="fa fa-trash" 
						onClick={() => setTodo(todo.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>
				 ))}
			</ul>
			<div>
				 {todo.length}task
			</div>
		</div>
	);
};

export default Home;
