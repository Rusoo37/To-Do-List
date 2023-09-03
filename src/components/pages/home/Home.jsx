import React from "react";
import Task from "../../common/tasks/Task";
import AddIcon from "@mui/icons-material/Add";
import "./Home.css";

const Home = ({
    handleSubmit,
    handleChange,
    errors,
    tasksArray,
    deleteTask,
    addDoneTask,
    deleteDoneTask,
}) => {
    return (
        <div className="box-home">
            <div className="container-box-home">
                <div className="container-part-home">
                    <h2 style={{ marginTop: "1rem" }}>Tasks</h2>
                    <div className="tareas-part-home">
                        {tasksArray.length > 0 ? (
                            tasksArray.map((task) => (
                                <Task
                                    task={task}
                                    deleteTask={deleteTask}
                                    addDoneTask={addDoneTask}
                                    deleteDoneTask={deleteDoneTask}
                                    key={task.id}
                                />
                            ))
                        ) : (
                            <h3>There is any task..</h3>
                        )}
                    </div>
                    <form className="btn-part-home" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="task"
                            placeholder="Write a new task.."
                            className="input-text-task"
                            onChange={handleChange}
                        />
                        <div className="separator-btn-home"></div>
                        <button
                            type="button"
                            className="btn-text-task"
                            onClick={handleSubmit}
                        >
                            <AddIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
