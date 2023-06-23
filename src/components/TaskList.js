import TaskItem from "./TaskItem";
import classes from './TaskList.module.css';

const TaskList = ({ listItems, updateTask, deleteTask }) => {

    return (
        <div className={classes.main}>
            {listItems.map((item, index) => <TaskItem key={index} item={item} updateTask={updateTask} deleteTask={deleteTask} />)}
        </div>
    );
};

export default TaskList;