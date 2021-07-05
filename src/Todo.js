import React, { useState } from 'react';
import'./App.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const Todo = () => {
	
	
	const [item, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);
	
	const itemEvent = (event) => {
		setItem(event.target.value);
	}
	
	const listItem = () => {
		setNewItem((prev)=>{return [...prev, item]});
		
		setItem("");
		
	}
	
	const thirdEvent = () => {
		setNewItem([]);
	}
	
	return(
		<div>
        <div className="main">
       <div className="box">
			<br />
			<br />
	<h1>  To-do list</h1>
				<input type="text" value={item} placeholder="Add a task" onChange={itemEvent} />
				<Button className="Btn" onClick={listItem}>
					<AddIcon />
				</Button>
				<br />
				<br />
				<ul>
					{
						newItem.map((val) => {
							return <li> {val} </li>;
						})
					}
				</ul>
        </div>
    
			</div>
			<br />
			<br />
		
		</div>
	);
}


export default Todo;

