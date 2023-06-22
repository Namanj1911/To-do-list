import Task from "../components/Task";
import TaskList from "../components/TaskList";
import { addDoc, collection, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../store/firebase';
import { useContext, useEffect, useState } from "react";
import { where, getDocs } from "firebase/firestore";
import AuthContext from "../store/auth-context";
import { query } from "firebase/firestore";
import { Container } from "@mui/material";

const TaskPage = () => {

    const { user } = useContext(AuthContext);
    const [listItems, setListItems] = useState([]);

    const loadItems = async () => {
        const query1 = query(collection(db, "tasks"), where("user", "==", user));
        const querySnapshot = await getDocs(query1);
        const items = [];

        querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id });
        });
        setListItems(items);
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    const deleteTask = async (taskId) => {
        await deleteDoc(doc(db, "tasks", taskId));
        loadItems();
    }

    const updateTask = async (taskId, newStatus) => {
        const query = doc(db, "tasks", taskId);
        await updateDoc(query, {
            status: newStatus
        });
        loadItems();
    };

    const addTask = async (task) => {
        await addDoc(collection(db, "tasks"), {
            user: user,
            task: task,
            status: false,
        });
        loadItems();
    };

    return (
        <Container>
            <Task addTask={addTask} />
            <TaskList listItems={listItems} updateTask={updateTask} deleteTask={deleteTask} />
        </Container>
    )
}

export default TaskPage;