import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";

import ListItems from "./componentes/ListaTarefa";
import CadastraTarefa from "./componentes/CadastraTarefa";

function App() {
    const [tarefas, setTarefas] = useState([]);

    const adicionaNovaTarefa = (tarefa) => {
        const copiaDeTarefas = Array.from(tarefas);
        copiaDeTarefas.push({ id: uuid(), value: tarefa, state: false });
        setTarefas(copiaDeTarefas);
        mostraEmJSON(copiaDeTarefas);
    };

    const atualizaTarefa = ({ target }, index, id, state) => {
        console.log(target);
        const copiaDeTarefas = Array.from(tarefas);
        copiaDeTarefas.splice(index, 1, { id: id, value: target.value, state: state });
        setTarefas(copiaDeTarefas);
        mostraEmJSON(copiaDeTarefas);
    };

    const atualizaEstadoDaTarefa = ({ target }, index, id, state) => {
        state ? (state = false) : (state = true);

        const copiaDeTarefas = Array.from(tarefas);
        copiaDeTarefas.splice(index, 1, { id: id, value: target.value, state: state });
        setTarefas(copiaDeTarefas);
        mostraEmJSON(copiaDeTarefas);
    };

    const deletaTarefa = (index) => {
        const copiaDeTarefas = Array.from(tarefas);
        copiaDeTarefas.splice(index, 1);
        setTarefas(copiaDeTarefas);
        mostraEmJSON(copiaDeTarefas);
    };

    function mostraEmJSON(tarefas) {
        console.clear();
        console.log(JSON.stringify(tarefas, null, 4));
    }

    return (
        <div className="App">
            <h1>TO-DO-LIST</h1>
            <CadastraTarefa 
                onSubmit={adicionaNovaTarefa} 
            />

            <ul className="lista-tarefas">
                {tarefas.map(({ id, value, state }, index) => (
                    <ListItems 
                        key={id} 
                        id={id} 
                        value={value} 
                        onDelete={() => deletaTarefa(index)} 
                        onChange={(event) => atualizaTarefa(event, index, id, state)} 
                        onChangeState={(event) => atualizaEstadoDaTarefa(event, index, id, state)} 
                    />
                ))}
            </ul>
            
        </div>
    );
}

export default App;
