import {Link} from "react-router-dom"
const NavBar = (props) => {
    return (
        <div class= "nav bar">
        <Link to="/">Home Page</Link>
        <Link to="/todo-form">ToDoFormPage</Link>

        </div>
    )
}
export default NavBar
