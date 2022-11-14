import NavBar from "../Components/NavBar"
import {Outlet} from "react-router-dom"
const GlobalLayout = (props) => {
    return (
        <div className="global-layout">
        <NavBar/>
        <Outlet/>
        </div>
    )
}
export default GlobalLayout