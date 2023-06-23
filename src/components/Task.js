import * as React from 'react';
import TextField from '@mui/material/TextField';
import classes from './Task.module.css';

const Task = ({ addTask }) => {

    const [inputValue, setInputValue] = React.useState('');

    const addTaskAddHandler = async (event) => {
        event.preventDefault();
        addTask(inputValue);
        setInputValue("");
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={classes.main}>
            <TextField className={classes.field} label="Enter Task" onChange={handleInputChange} value={inputValue} required />
            <button className={classes.button} onClick={addTaskAddHandler} variant="contained">Add Task</button>
        </div>
    );
}

export default Task;