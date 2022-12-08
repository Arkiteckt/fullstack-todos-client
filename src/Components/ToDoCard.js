const ToDoCard = ({ todoItem }) => {
    return (
        <div className="todo-card">
            <h2>{todoItem.title}</h2>
            <p>ID: {todoItem.id}</p>
            <p>Description: {todoItem.description}</p>
            <p>Priority: {todoItem.priority}</p>
            <p>Is Complete: {todoItem.isComplete ? "Complete" : "Incomplete"}</p>
            <p>Creation Date: {todoItem.creationDate.toString()}</p>
            <p>Last Modified: {todoItem.lastModified.toString()} </p>
            {todoItem.completedDate && <p>Completed Date: {todoItem.completedDate.toString()}</p>}
        </div>
    )
}
export default ToDoCard