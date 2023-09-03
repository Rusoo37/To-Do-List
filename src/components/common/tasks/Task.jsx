import "./Task.css";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Task = ({ task, deleteTask, addDoneTask, deleteDoneTask }) => {
    const [isTachado, setIsTachado] = useState(false);
    const doneTask = () => {
        setIsTachado(!isTachado);
        isTachado ? deleteDoneTask(task) : addDoneTask(task);
    };

    let diasSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];
    return (
        <div
            className="container-task"
            style={{ textDecoration: isTachado ? "line-through" : "none" }}
        >
            <button
                className="btn-task"
                style={{ width: "10%" }}
                onClick={doneTask}
            >
                <Checkbox />
            </button>
            <div className="container-info-task">
                <h3>{task.order.task}</h3>
                <h4 className="date-task">{diasSemana[task.day]}</h4>
            </div>
            <button onClick={() => deleteTask(task.order)} className="btn-task">
                <DeleteIcon />
            </button>
        </div>
    );
};

export default Task;
