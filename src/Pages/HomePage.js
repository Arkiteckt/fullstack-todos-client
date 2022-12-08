import ToDoCard from "../Components/ToDoCard"
const HomePage = ({ toDoList }) => {
    return (
        <div>
        <h1>Fullstack ToDo Application</h1>
        {toDoList.map((todoItem) => {
            return <ToDoCard todoItem={todoItem} />
        })}
    
   
        </div>
    )
}
export default HomePage
