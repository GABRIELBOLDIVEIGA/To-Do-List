import React, { useState } from "react";
import "./CadastraTarefa.css";

const CadastraTarefa = ({ onSubmit, onSubmit2 }) => {
    const [novoItem, setNovoItem] = useState("");
    const [prioridadeTarefa, setprioridadeTarefa] = useState("");

    const setNovaTarefa = ({ target }) => {
        setNovoItem(target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        onSubmit(novoItem);
        // event.target.reset();
    };

    const onClick = ({ target }) => {
        // console.log(target.value);
        setprioridadeTarefa(target.value);
        target.checked = true;
    }
    
    const submit2 = (event) => {
        event.preventDefault();
        // console.log(event.target)

        const tarefa = {
            nome: novoItem,
            prioridade: prioridadeTarefa
        }
        onSubmit2(tarefa)
        
        event.target.reset();
    }
    

    return (
        <>
             <form  /* onSubmit={submit} */  onSubmit={submit2}> 
                <div className="container-cadastraItem">
                    <input 
                        required
                        className="Todo-input" 
                        onChange={setNovaTarefa} 
                        placeholder="Nova tarefa..." 
                    />
                    <button type="submit" />
                </div>

                <div className="secBtn"> 
                    <input required type="radio" id="baixa" name="prioridade" value="Baixa" onClick ={onClick}/>
                    <label className="btn-prioridade label-baixa" htmlFor="baixa" >Baixa</label>
                    <input type="radio" id="media" name="prioridade" value="Media" onClick ={onClick}/>
                    <label className="btn-prioridade label-media" htmlFor="media" >Media</label>
                    <input type="radio" id="alta" name="prioridade" value="Alta"  onClick ={onClick}/>
                    <label className="btn-prioridade label-alta" htmlFor="alta" >Alta</label>
                </div>
            </form>
            {/* <div className="secBtn">
                <button className="btn-prioridade"  data-prioridadeBaixa > Baixa </button>
                <button className="btn-prioridade" data-prioridadeMedia > Media </button>
                <button className="btn-prioridade"  data-prioridadeAlta  > Alta </button>
            </div> */}

            
        </>
    );
};

export default CadastraTarefa;
