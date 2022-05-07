import React from 'react';

const SeatInfo = ({ seat = {}, seatI, onSeatClick }) => {
    const [fact, setFact] = React.useState('')

    const OnClickSeat = () => {
        onSeatClick(seatI)
    }

    React.useEffect(() => {
        setTimeout(() => {
            setFact('Borrada han pasado 5s')
        }, 5000)  
    },[seat])

    React.useEffect(() => {
        if (seat && seat.age) {
            fetch('http://numbersapi.com/31')
            .then(response => response.text())
            .then(data => setFact(data));
        }
    },[seat])

    if (seat===null) {
        return <div 
        onClick={OnClickSeat}
        className='seat empty' 
        >Vacío</div>
    } else {
        return <div
        onClick={OnClickSeat} 
        className= 'seat occupied'
        >Ocupado por {seat.name}
        <p><span>Fun fact about your age: {fact} </span></p>
        </div>
    }
    

}                        

export default SeatInfo ;
