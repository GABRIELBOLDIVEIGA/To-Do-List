import { useState } from "react";
import "./Tarefa.css";

export default function Tarefa(props) {
    const [checkedState, setCheckedState] = useState(new Array(props.tarefas.length).fill(false));

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));

        setCheckedState(updatedCheckedState);
    };

    const deletar = (evento) => {
        console.log(evento.target.parentNode)
        console.log(evento.target.parentNode.id)
        props.tarefaDeletada(evento.target.parentNode.id);
    };

    return (
        <ul className="lista-tarefas">
            {props.tarefas.map((elemento, index) => {
                return (
                    <li key={index} id={index}>
                        <input 
                            type="checkbox" 
                            id={`custom-checkbox-${index}`} 
                            name={elemento} 
                            value={elemento} 
                            checked={checkedState[index]} 
                            onChange={() => handleOnChange(index)} 
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{elemento}</label>
                        <button className="btn-delete" onClick={deletar} />
                    </li>
                );
            })}
        </ul>
    );
}
