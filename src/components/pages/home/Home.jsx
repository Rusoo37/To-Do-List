import Task from "../../common/tasks/Task";
import "./Home.css";
import TodoForm from "../../common/todoForm/TodoForm";
import { EditTodoForm } from "../editTodoForm/EditTodoForm";

const Home = ({
    tasks,
    addToDo,
    deleteTask,
    editTodo,
    toggleComplete,
    editTask,
}) => {
    return (
        <div className="box-home">
            <div className="container-box-home">
                <div className="container-part-home">
                    <h2 style={{ marginTop: "2rem" }}>My To-do list</h2>
                    <div className="separator-tittle-home"></div>
                    <div className="tareas-part-home">
                        {tasks.length > 0 ? (
                            tasks.map((todo, index) =>
                                todo.isEditing ? (
                                    <EditTodoForm
                                        editTodo={editTask}
                                        task={todo}
                                        key={index}
                                    />
                                ) : (
                                    <Task
                                        key={index}
                                        task={todo}
                                        deleteTask={deleteTask}
                                        editTodo={editTodo}
                                        toggleComplete={toggleComplete}
                                    />
                                )
                            )
                        ) : (
                            <h3>There are no tasks..</h3>
                        )}
                    </div>
                    <div
                        className="separator-tittle-home"
                        style={{ marginBottom: "2rem", marginTop: "1rem" }}
                    ></div>
                    <TodoForm addToDo={addToDo} />
                </div>
            </div>
        </div>
    );
};

export default Home;
