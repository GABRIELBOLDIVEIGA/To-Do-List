import "./App.css";
import CadastraItem from "./componentes/CadastraItem";
import Tarefas from "./componentes/Tarefa";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
    const [tarefas, setTarefas] = useState([]);

    const adicionaTarefa = (novaTarefa) => {
        console.log(novaTarefa)
        
        setTarefas([...tarefas, novaTarefa]);
    };

    const deletaTarefa = (tarefaADeletar) => {
        // console.log(tarefaADeletar)
        // console.log(tarefas)
        setTarefas(tarefas.filter(
            (tarefa, index) => index != tarefaADeletar))
        // console.log(tarefas)
    }

    return (
        <div className="App">
            <h1>TO-DO-LIST</h1>
            <CadastraItem tarefaCadastrada={(novaTarefa) => adicionaTarefa(novaTarefa)} />

            <Tarefas 
                tarefaDeletada={
                    (tarefaADeletar) => deletaTarefa(tarefaADeletar)} 
                    tarefas={tarefas} />
        </div>
    );
}

export default App;


