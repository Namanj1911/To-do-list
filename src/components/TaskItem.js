import { useEffect, useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";

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
        <div>
            <FormControlLabel style={{ textDecoration: status ? 'line-through' : 'none' }} control={<Checkbox id={item.id} checked={status} onChange={onStatusChange} />} label={item.task} />
            <Button id={item.id} onClick={ondeleteTask}>Delete</Button>
        </div>
    )
}

export default TaskItem;