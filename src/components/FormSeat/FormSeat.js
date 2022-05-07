import React, {useState} from 'react' ;

const FormSeat = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState ()
    const seatI = props.seatI 
    const onSeatBook = props.onSeatBook

    const onButtonClick = () => {
        onSeatBook(seatI, name, age)

    }

    const onVaciarClick = () => {
        props.onSeatVaciar(seatI)
    }

    const onNameChange = (e) => {
        const name = e.target.value
        setName (name)
    }

    const onAgeChange = (e) => {
        const age = e.target.value
        setAge (age)
    }

    return (
        <>
            <h3>Asiento {seatI}</h3>
            <p> Introduce tu nombre</p>
            <input type='text' value={name} onChange={onNameChange}></input>
            <br></br>
            <p> Introduce tu edad</p>
            <input type='number' value={age} onChange={onAgeChange}></input>
            <br></br>

            {!props.seats[seatI] ? <button onClick={onButtonClick}>Reservar</button> : <button onClick={onVaciarClick}>Desocupar</button>}
                        
            {/* {!props.seats[seatI] && <button onClick={onButtonClick}>Reservar</button>}
            {props.seats[seatI] && <button onClick={onVaciarClick}>Desocupar</button>} */}
            
            {/* <button disabled={props.seats[seatI]} onClick={onButtonClick}>Reservar</button>
            <button disabled={!props.seats[seatI]} onClick={onVaciarClick}>Desocupar</button> */}

            <p><button onClick={props.onAddNewSeat}>Añadir asiento nuevo</button></p>
        </>
    )

} ;


export default FormSeat 