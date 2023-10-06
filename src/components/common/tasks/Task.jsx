import "./Task.css";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const Task = ({ task, deleteTask, editTodo, toggleComplete }) => {
    return (
        <div
            className="container-task"
            style={{
                textDecoration: task.completed ? "line-through" : "none",
            }}
        >
            <button
                className="btn-task"
                style={{ width: "10%" }}
                onClick={() => toggleComplete(task.id)}
            >
                <Checkbox />
            </button>
            <div className="container-info-task">
                <h3>{task.task}</h3>
            </div>
            <button className="btn-task" onClick={() => editTodo(task.id)}>
                <EditIcon />
            </button>
            <button onClick={() => deleteTask(task.id)} className="btn-task">
                <DeleteIcon />
            </button>
        </div>
    );
};

export default Task;
