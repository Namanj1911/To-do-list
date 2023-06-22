import { signOut } from "firebase/auth";
import { auth } from "../store/firebase";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Container, Typography } from "@mui/material";
import classes from './MainNavigation.module.css';

function MainNavigation() {

    const { isLoggedIn, setIsLoggedIn, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const signOutHandler = async () => {
        await signOut(auth);
        console.log("User signed out");
        setIsLoggedIn(false);
        setUser(null);
        navigate('/');
    }

    return (
        <Container >
            <Typography variant="h2">To-Do List</Typography>
            {isLoggedIn && <Button onClick={signOutHandler}>Sign Out</Button>}
        </Container>
    );
}

export default MainNavigation;