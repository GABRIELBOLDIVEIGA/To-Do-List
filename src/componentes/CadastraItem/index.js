import "./CadastraItem.css";
// import Input from "../Input";
// import { useState } from "react";
// import uuid from "react-uuid";


// export default function CadastraItem(props) {
//     const [tarefa, setTarefa] = useState([]);

//     const adicionaTarefa = (evento) => {
//         evento.preventDefault();
//         evento.target.reset();
//         props.tarefaCadastrada(tarefa);
//     };

//     return (
//         <>
//             <form onSubmit={adicionaTarefa} className="container-cadastraItem">
//                 <Input
//                     required={true}
//                     placeholder="Nova Tarefa..."
//                     valor={tarefa}
//                     aoAlterado={(valor) => {
//                         setTarefa(valor);
//                     }}
//                 />
//                 <button />
//             </form>
//         </>
//     );
// }

import React, { useState } from "react";

const NewTask = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState("");

    const setNewTask = ({ target }) => {
        setNewItem(target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        onSubmit(newItem);
    };

    return (
        <div>
            <form  onSubmit={submit}>
                <input className="Todo-input" onChange={setNewTask} placeholder="Nome da tarefa" />
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};

export default NewTask;
