import { signOut } from "firebase/auth";
import { auth } from "../store/firebase";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import classes from './MainNavigation.module.css';
import Cookies from 'js-cookie';

function MainNavigation() {

    const navigate = useNavigate();
    let userIsSignedIn = Cookies.get('user');

    const signOutHandler = async () => {
        await signOut(auth);
        console.log("User signed out");
        Cookies.remove('user');
        navigate('/');
    };

    const signUpHandler = () => {
        navigate('/signup');
    }

    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h3" className={classes.text}>To-Do List</Typography>
                {userIsSignedIn && <button className={classes.button} onClick={signOutHandler}>Sign Out</button>}
                {!userIsSignedIn && <button className={classes.button} onClick={signUpHandler}>Sign Up</button>}
            </div>
        </div>
    );
}

export default MainNavigation;