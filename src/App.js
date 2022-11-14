import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ToDoFormPage from './Pages/ToDoFormPage';



// const urlEndpoint = "http://localhost:4000"
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
const [toDoList, settoDoList] = useState([])
useEffect(()=>{
  const fetchmockTodos = async () => {
    const response = await fetch(`${urlEndpoint}/todos/all`)
    console.log(response)
    console.log(await response.json())
    const fetchedtodosPayload = await result.json()
    console.log(fetchedtodosPayload)
    setBlogs(fetchedtodosPayload.blogs)
  }
fetchmockTodos()
}, [])

props.toDoList.map() // pass toDoList as a prop into (the browser router element)
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <todo-form/>,
    children: [
      { index: true,
        element: <ToDoFormPage/> //./src/App.js:Add ToDoFormPage as a child route of "/" with the path "/todo-form
      },
      {
    path: "/",
    element: <GlobalLayout/>,
    children: [
      { index: true,
        element: <HomePage/>
      }
      ,{
        path: "/movies",
        element: <MovieLayout movieList={movieList}/>,
        children: [
          {
            element: <MovieListPage movieList={movieList}/>,
            index: true,
          },
          {
            element: <MoviePage movieList={movieList}/>,
            path: ":title",
          }
        ],
      },
      
    ]
  },
  
 ])


	return (
		<div className="App-header">
    <RouterProvider router={router} />
    
		</div>
	);
}

export default App;

