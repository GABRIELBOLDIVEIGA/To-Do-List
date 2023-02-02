import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import ListItems from "./componentes/ListaTarefa";
import CadastraTarefa from "./componentes/CadastraTarefa";

function App() {
    const [tarefas, setTarefas] = useState([]);

    const adicionaNovaTarefaV2 = ( tarefa ) => {
        const copiaDeTarefas = Array.from(tarefas);
        copiaDeTarefas.unshift(
            { 
            id: uuid(), 
            value: tarefa.nome, 
            prioridade:tarefa.prioridade, 
            state: false,
            data: new Date(),
            deletada: false
        })
       
        setTarefas(copiaDeTarefas);
        mostraEmJSON(copiaDeTarefas);
        salvaLocalStorage(copiaDeTarefas);
    }

    const atualizaTarefa = ({ target }, index, id, prioridade, state, data, deletada) => {
        const copiaDeTarefas = Array.from(tarefas);
        copiaDeTarefas.splice(index, 1, { 
            id: id, 
            value: target.value, 
            prioridade:prioridade, 
            state: state,
            data: data,
            deletada: deletada
        });
        setTarefas(copiaDeTarefas);
        mostraEmJSON(copiaDeTarefas);
        salvaLocalStorage(copiaDeTarefas);
    };

    const atualizaEstadoDaTarefa = ({ target }, index, id, prioridade, state, data, deletada) => {
        state ? (state = false) : (state = true);

        const copiaDeTarefas = Array.from(tarefas);
        copiaDeTarefas.splice(index, 1, { 
            id: id, 
            value: target.value, 
            prioridade:prioridade, 
            state: state,
            data: data,
            deletada: deletada
        });
        setTarefas(copiaDeTarefas);
        mostraEmJSON(copiaDeTarefas);
        salvaLocalStorage(copiaDeTarefas);
    };

    const deletaTarefa = (index) => {
        const copiaDeTarefas = Array.from(tarefas);
        copiaDeTarefas.splice(index, 1);
        setTarefas(copiaDeTarefas);
        mostraEmJSON(copiaDeTarefas);
    };

    const mostraEmJSON = (tarefas) => {
        console.clear();
        console.log(JSON.stringify(tarefas, null, 4));
        console.table(tarefas)
    }

    const salvaLocalStorage = (tarefas) => {
        localStorage.setItem("MinhasTarefas", JSON.stringify(tarefas));
    } 

    const buscaLocalStorage = () => {
        const obj = JSON.parse(localStorage.getItem("MinhasTarefas"));
        console.log(obj);

    }

    return (
        <div className="App">
            <h1>TAREFAS</h1>
            <CadastraTarefa 
                onSubmitV2={adicionaNovaTarefaV2}
            />
            {/* { id, value, prioridade, state, data, deletada }, */}
            <ul className="lista-tarefas">
                {tarefas.map((tarefa,  index) => (
                    <ListItems 
                        key={tarefa.id} 
                        id={tarefa.id} 
                        value={tarefa.value} 
                        prioridade={tarefa.prioridade}
                        onDelete={() => deletaTarefa(index)} 
                        onChange={(event) => atualizaTarefa(event, index, tarefa.id, tarefa.prioridade, tarefa.state, tarefa.data, tarefa.deletada)} 
                        onChangeState={(event) => atualizaEstadoDaTarefa(event, index, tarefa.id, tarefa.prioridade, tarefa.state, tarefa.data, tarefa.deletada)} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
