import TaskItem from "./TaskItem";

const TaskList = ({ listItems, updateTask, deleteTask }) => {

    return (
        <div>
            {listItems.map((item, index) => <TaskItem key={index} item={item} updateTask={updateTask} deleteTask={deleteTask} />)}
        </div>
    )
}

export default TaskList;