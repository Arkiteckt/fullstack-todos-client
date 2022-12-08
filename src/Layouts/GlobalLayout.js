import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom"
const GlobalLayout = (props) => {
    return (
        <div className="global-layout">
        <NavBar/>
        <Outlet/>
        </div>
    )
}
export default GlobalLayout

//Create a new browser router in the body of <App/> and add a new RouteProvider to the JSX of <App/>.
//Set the "/" route in the browser router to render the <GlobalLayout/> as the element.
//Set the first child route of GlobalLayout to render <HomePage/> as the element. Set this route as the index route.
