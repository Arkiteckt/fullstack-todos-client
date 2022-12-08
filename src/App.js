import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ToDoFormPage from './Pages/ToDoFormPage';
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";


// const urlEndpoint = "http://localhost:4000"
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

function App() {
const [toDoList, setToDoList] = useState([])

useEffect(() => {
  const fetchmockTodos = async () => {
    const response = await fetch(`${urlEndpoint}/todos/all`)
    const fetchedtodosPayload = await response.json()
    console.log(fetchedtodosPayload)
    setToDoList(fetchedtodosPayload.list)
  }
  fetchmockTodos()
}, [])

// props.toDoList.map() // pass toDoList as a prop into (the browser router element)
const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout/>,
    children: [
      { 
        index: true,
        element: <HomePage toDoList={toDoList} /> //./src/App.js:Add ToDoFormPage as a child route of "/" with the path "/todo-form
      },
      {
        path: "/todo-form",
        element: <ToDoFormPage />
      }
    ]  
  }
 ])


	return (
		<div className="App-header">
    <RouterProvider router={router}>
    </RouterProvider>
    </div>
	);
}

export default App;





