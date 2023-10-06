import { useState } from "react";
import "./EditTodoForm.css";

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
    };
    return (
        <form onSubmit={handleSubmit} className="btn-edit-home">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="input-edit-task"
                placeholder="Update task"
            />
            <button type="submit" className="btn-edit">
                update task
            </button>
        </form>
    );
};
