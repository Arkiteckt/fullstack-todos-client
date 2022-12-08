import { useState } from "react";

const ToDoFormPage = (props) => {
    const {urlEndpoint} = props //Pass urlEndpoint as a prop into ToDoFormPage in App.js
    
    const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [priority, setPriority] = useState("")

    const handleCreateToDo = async () => {
		// setSuccessMessage("") //Double check this
		const response = await fetch(`${urlEndpoint}/todos/create-one`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json' // This Content-Type flag is used to tell the server that our request body should be parsed as a JSON object.
			},
			body: JSON.stringify({
				title,
				description,
				priority,
			})
		})
	}

	// Add a button that says "Create ToDo" and have it call handleCreateToDo onClick.
	// Add a programmatic redirect to "/" using react-router-dom in the Create ToDo button onClick handler.

    return (
        <div>
        <h1>Create ToDo Form</h1>
        <label>Title</label>
        <input type="text" onChange={(e)=>{
				setTitle(e.target.value)
			}}/>
            <br/>
            <label>Description</label>
        <input type="textarea" onChange={(e)=>{
				setDescription(e.target.value)
			}}/>
            <br/>
            <label>Priority</label>
			{/* select id="Priority">
			<option value="High">High</option>
			<option value="Medium">Medium</option>
			<option value="Low">Low</option> */}
        <input type="textarea" onChange={(e)=>{
				setPriority(e.target.value)
			}}/>
        </div>
    )
}

export default ToDoFormPage


