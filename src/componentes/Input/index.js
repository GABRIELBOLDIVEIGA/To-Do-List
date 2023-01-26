export default function Input(props) {

    const aoAlterado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <>
            <input 
                required={props.required} 
                placeholder={props.placeholder} 
                onChange={aoAlterado} 
                value={props.value}
            />
        </>
    );
}