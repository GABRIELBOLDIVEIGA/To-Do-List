import "./Tarefa.css";
import uuid from "react-uuid";

export default function Tarefa(props) {
    const deletar = (evento) => {
        // console.log(evento.target.parentNode.id)
        props.tarefaDeletada(evento.target.parentNode.id);
    };

    return (
        <>
            <ul className="lista-tarefas">
                {props.tarefas.map((elemento, index) => (
                    <li key={uuid()} id={index} className="item-lista">
                        
                        <label>
                           <input type="checkbox" />
                            <p>{elemento}</p>
                        </label>

                        <button onClick={deletar} />
                    </li>
                ))}
            </ul>
        </>
    );
}
