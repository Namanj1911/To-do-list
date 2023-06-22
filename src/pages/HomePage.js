import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>This is your personal To-Do List app</h1>
            <h3>Please <NavLink to="/login">SignIn</NavLink> to continue</h3>
        </div>
    )
}

export default HomePage;