import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <div>
            <TextField label="Enter Task" onChange={handleInputChange} value={inputValue} required />
            <Button onClick={addTaskAddHandler} variant="contained">Add Task</Button>
        </div>
    );
}

export default Task;