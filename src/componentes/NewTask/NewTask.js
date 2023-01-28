import React, { useState } from "react";
import "./NewTask.css";

const NewTask = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState("");

    const setNewTask = ({ target }) => {
        setNewItem(target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        onSubmit(newItem);
        event.target.reset();
    };

    return (
        <form className="container-cadastraItem" onSubmit={submit}>
            <input className="Todo-input" onChange={setNewTask} placeholder="Nome da tarefa" />
            <button type="submit" />
        </form>
    );
};

export default NewTask;
