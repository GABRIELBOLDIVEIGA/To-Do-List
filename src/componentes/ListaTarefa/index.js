import "./ListaTarefa.css";

const ListaTarefa = ({ onChangeState, onChange, onDelete, value, id, state }) => {
    return (
        <li className="custom-checkbox item-lista">
            <div>
                <input 
                    type="checkbox"
                    id={id} 
                    checked={state} 
                    value={value} 
                    onChange={onChangeState} 
                />
                <label htmlFor={id} />

                <input
                type="text"
                    className="texto-tarefa" 
                    value={value} 
                    onChange={onChange} 
                />
            </div>
            
            <button className="btn-delete" onClick={onDelete} />
        </li>
    );
};

export default ListaTarefa;
