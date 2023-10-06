import { useState } from "react";
import Home from "./Home";
import { v4 as uuidv4 } from "uuid";

const HomeContainer = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );
    const addToDo = (todo) => {
        const newArray = [
            ...tasks,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ];
        setTasks(newArray);
        localStorage.setItem("tasks", JSON.stringify(newArray));
    };

    const deleteTask = (id) => {
        const newArr = tasks.filter((el) => el.id !== id);
        localStorage.setItem("tasks", JSON.stringify(newArr));
        setTasks(newArr);
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (id) => {
        setTasks(
            tasks.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        const newTasks = tasks.map((todo) =>
            todo.id === id
                ? { ...todo, task, isEditing: !todo.isEditing }
                : todo
        );
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    return (
        <>
            <Home
                tasks={tasks}
                addToDo={addToDo}
                deleteTask={deleteTask}
                editTodo={editTodo}
                editTask={editTask}
                toggleComplete={toggleComplete}
            />
        </>
    );
};

export default HomeContainer;
