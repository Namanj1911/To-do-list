import { useEffect, useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import classes from './TaskItem.module.css';

const TaskItem = ({ item, updateTask, deleteTask }) => {

    const [status, setStatus] = useState(item.status);

    useEffect(() => {
        setStatus(item.status);
    }, [item]);

    const onStatusChange = async () => {
        let newStatus = !status;
        setStatus(newStatus);
        await updateTask(item.id, newStatus);
    }

    const ondeleteTask = async () => {
        await deleteTask(item.id);
    }

    return (
        <div className={classes.main}>
            <FormControlLabel style={{ textDecoration: status ? 'line-through' : 'none' }} control={<Checkbox id={item.id} checked={status} onChange={onStatusChange} />} label={item.task} />
            <button className={classes.button} id={item.id} onClick={ondeleteTask}>Delete</button>
        </div>
    )
}

export default TaskItem;