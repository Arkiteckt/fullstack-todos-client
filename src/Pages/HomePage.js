const HomePage = (props) => {
    const {urlEndpoint} = props

    return (
        <div>
    <h1>Fullstack ToDo Application</h1>
    <h2>title</h2>
    <p>ID: {toDo}</p>
    <p>Description: {toDo}</p>
    <p>Priority: {toDo}</p>
    <p>Is Complete: {Complete}</p>
    <p>Creation Date: {toDo} creationDate.toString()</p>
    <p>Last Modified: {toDo} lastModified.toString()</p>
    <p>Completed Date</p>
    <HomePage toDoList={toDoList}/>
   
        </div>
    )
}
export default HomePage