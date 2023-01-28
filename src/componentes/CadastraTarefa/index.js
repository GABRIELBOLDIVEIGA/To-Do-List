import React, { useState } from "react";
import "./CadastraTarefa.css";

const CadastraTarefa = ({ onSubmit }) => {
    const [novoItem, setNovoItem] = useState("");

    const setNovaTarefa = ({ target }) => {
        setNovoItem(target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        onSubmit(novoItem);
        event.target.reset();
    };

    return (
        <form className="container-cadastraItem" onSubmit={submit}>
            <input 
                className="Todo-input" 
                onChange={setNovaTarefa} 
                placeholder="Nova tarefa..." 
            />
            <button type="submit" />
        </form>
    );
};

export default CadastraTarefa;
