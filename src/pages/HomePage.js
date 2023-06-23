import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const HomePage = () => {

    let renderedData;

    if (Cookies.get('user')) {
        renderedData = <h3>Go to your <NavLink to="/user">Task Page</NavLink></h3>
    } else {
        renderedData = <h3>Please <NavLink to="/login">SignIn</NavLink> to continue</h3>
    };

    return (
        <div>
            <h1>This is your personal To-Do List app</h1>
            {renderedData}
        </div>
    )
}

export default HomePage;