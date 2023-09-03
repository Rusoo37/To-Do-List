import { useState } from "react";
import Home from "./Home";
import * as Yup from "yup";
import { useFormik } from "formik";

const HomeContainer = () => {
    const [tasksDelete, setTasksDelete] = useState([]);
    const [tasksDone, setTasksDone] = useState([]);

    const [tasksArray, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            task: "",
        },
        onSubmit: (data) => {
            let date = new Date();
            let newTask = {
                id: Math.random(),
                order: data,
                day: date.getDay(),
            };
            const existe = tasksArray.some(
                (elemento) => elemento.order == task
            );
            if (existe) {
                alert("Esta tarea ya esta puesta");
            } else {
                localStorage.setItem(
                    "tasks",
                    JSON.stringify([...tasksArray, newTask])
                );
                setTasks([...tasksArray, newTask]);
            }
        },
        onChange: (data) => {
            setUserData({ ...userData, [e.target.name]: e.target.value });
        },
        validationSchema: Yup.object({
            task: Yup.string().required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
    });

    const deleteTask = ({ task }) => {
        setTasksDelete([...tasksDelete, task]);
        const newArr = tasksArray;
        const itemIndex = tasksArray.findIndex((el) => el.order.task === task);
        newArr.splice(itemIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(newArr));
        setTasks(newArr);
    };

    const addDoneTask = (task) => {
        setTasksDone([...tasksDone, task]);
    };
    const deleteDoneTask = (task) => {
        const newArr = tasksDone;
        const itemIndex = tasksDone.findIndex((el) => el.id === task.id);
        newArr.splice(itemIndex, 1);
        setTasksDone(newArr);
    };

    return (
        <>
            <Home
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                tasksArray={tasksArray}
                deleteTask={deleteTask}
                addDoneTask={addDoneTask}
                deleteDoneTask={deleteDoneTask}
            />
        </>
    );
};

export default HomeContainer;
