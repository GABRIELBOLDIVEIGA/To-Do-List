import React, { useState } from "react";
import "./CadastraTarefa.css";

const CadastraTarefa = ({ onSubmitV2 }) => {
    const [novoItem, setNovoItem] = useState("");
    const [prioridadeTarefa, setprioridadeTarefa] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    const setNovaTarefa = ({ target }) => {
        setNovoItem(target.value);
    };

    const onClick = ({ target }) => {
        setprioridadeTarefa(target.value);
        target.checked = true;
    }
    
    const submitV2 = (event) => {
        event.preventDefault();
        
        if(prioridadeTarefa != "") {
            const tarefa = {
                nome: novoItem,
                prioridade: prioridadeTarefa
            }

            onSubmitV2(tarefa)
            setprioridadeTarefa("");
            setMensagemErro("");

            event.target.reset();
        } else {
            setMensagemErro("Selecione uma Prioridade.")
        }
    }
    
    return (
        <>
             <form onSubmit={submitV2}> 
                <div className="container-cadastraItem">
                    <input required className="Todo-input" onChange={setNovaTarefa} placeholder="Nova tarefa..." 
                    />
                    <button type="submit" />
                </div>

                <div className="span-selecioneUmTarefa">{mensagemErro}</div>
                
                <div className="secBtn"> 
                    <input type="radio" id="baixa" name="prioridade" value="Baixa" onClick={onClick}/>
                    <label className="btn-prioridade label-baixa" htmlFor="baixa" >Baixa</label>

                    <input type="radio" id="media" name="prioridade" value="Media" onClick={onClick}/>
                    <label className="btn-prioridade label-media" htmlFor="media" >Media</label>

                    <input type="radio" id="alta" name="prioridade" value="Alta"  onClick={onClick}/>
                    <label className="btn-prioridade label-alta" htmlFor="alta" >Alta</label>
                </div>
            </form>
        </>
    );
};

export default CadastraTarefa;
