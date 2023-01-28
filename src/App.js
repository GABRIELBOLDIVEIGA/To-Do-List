import "./App.css";
import CadastraItem from "./componentes/CadastraItem";
import Tarefas from "./componentes/Tarefa";
import { useState } from "react";
import uuid from "react-uuid";

import ListItems from "./componentes/ListItems/ListItems.js";
import NewTask from "./componentes/NewTask/NewTask.js";

function App() {
    // const [tarefas, setTarefas] = useState([]);

    // const adicionaTarefa = (novaTarefa) => {
    //     console.log(novaTarefa)

    //     setTarefas([...tarefas, novaTarefa]);
    // };

    // const deletaTarefa = (tarefaADeletar) => {
    //     setTarefas(tarefas.filter(
    //         (tarefa, index) => index != tarefaADeletar))
    // }

    /* ------- */

    const [tasks, setTasks] = useState([]);

    const addNewTask = (task) => {
        const itensCopy = Array.from(tasks);
        itensCopy.push({ id: uuid(), value: task, state: false });
        setTasks(itensCopy);
        mostraEmJSON(itensCopy);
    };

    const updateTask = ({ target }, index, id, state) => {
        console.log(target);
        const itensCopy = Array.from(tasks);
        itensCopy.splice(index, 1, { id: id, value: target.value, state: state });
        setTasks(itensCopy);
        mostraEmJSON(itensCopy);
    };

    const updateTaskState = ({ target }, index, id, state) => {
        state ? (state = false) : (state = true);

        const itensCopy = Array.from(tasks);
        itensCopy.splice(index, 1, { id: id, value: target.value, state: state });
        setTasks(itensCopy);
        mostraEmJSON(itensCopy);
    };

    const deleteTask = (index) => {
        const itensCopy = Array.from(tasks);
        itensCopy.splice(index, 1);
        setTasks(itensCopy);
        mostraEmJSON(itensCopy)
    };

    function mostraEmJSON(tasks) {
        console.clear();
        console.log(JSON.stringify(tasks, null, 4))
    }

    /* ------- */

    return (
        <>
            {/* <div className="App">
            <h1>TO-DO-LIST</h1>
            <CadastraItem tarefaCadastrada={(novaTarefa) => adicionaTarefa(novaTarefa)} />

            <Tarefas 
                tarefaDeletada={
                    (tarefaADeletar) => deletaTarefa(tarefaADeletar)} 
                    tarefas={tarefas} />
        </div> */}

            <div className="App">
            <h1>TO-DO-LIST</h1>
                <NewTask onSubmit={addNewTask} />
                <ul className="lista-tarefas">
                    {tasks.map(({ id, value, state }, index) => (
                        <ListItems key={id} id={id} value={value} onDelete={() => deleteTask(index)} onChange={(event) => updateTask(event, index, id, state)} onChangeState={(event) => updateTaskState(event, index, id, state)} />
                    ))}
                </ul>
            </div>
            {/* <div className="Array-preview">
                <pre>{JSON.stringify(tasks, null, 4)}</pre>
            </div> */}
        </>
    );
}

export default App;
