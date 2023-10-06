import "./TodoForm.css";
import { useState } from "react";

const TodoForm = ({ addToDo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addToDo(value);
            setValue("");
        } else {
            alert("Please write a valid task");
        }
    };

    return (
        <form className="btn-part-home" onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Write a new task.."
                className="input-text-task"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="btn-text-task">
                Add a new Task
            </button>
        </form>
    );
};

export default TodoForm;
