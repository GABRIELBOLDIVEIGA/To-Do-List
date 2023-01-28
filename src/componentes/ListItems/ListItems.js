import "./ListItems.css";

const ListItem = ({ onChangeState, onChange, onDelete, value, id, state }) => {
    return (
        
        <li className="custom-checkbox item-lista">
            <div>
                <input id={id} type="checkbox" checked={state} value={value} onChange={onChangeState} />
                <label htmlFor={id}></label>

                <input value={value} onChange={onChange} className="texto-tarefa" />
            </div>
            <button className="btn-delete" onClick={onDelete} />
        </li>
        
    );
};

export default ListItem;
