import React, { useState } from 'react';
import Title from '../Title/Title' ;
import SeatsSchema from '../SeatsSchema/SeatsSchema';
import FormSeat from '../FormSeat/FormSeat';

const planeSeats = [null, null, null, null, null , null, null, null, null, null];


const Main = () => {
    const [seats, setSeats] = useState(planeSeats) ;
    const [seatI, setSeatI] = useState(null) ;

    const onSeatClick = (seatI) => {
        // console.log('from main', seatI)
        setSeatI(seatI)
    }

    const onSeatBook = (seatI, name, age) => {
        //console.log('el usuario ha reservado el asiento número', seatI)
        const seats2 = [...seats]
        seats2[seatI] = { name: name, age: age }
        setSeats(seats2)
    }

    const onSeatVaciar = (seatI) => {
        //console.log('el usuario ha reservado el asiento número', seatI)
        const seats2 = [...seats]
        seats2[seatI] = null 
        setSeats(seats2)
    }

    const onAddNewSeat = () => {
        const temporarySeats = [...seats]
        temporarySeats.push(null)
        setSeats(temporarySeats)
    }

    return(

        <>
        <Title />
        <SeatsSchema 
        onSeatClick={onSeatClick}
        seatsInfo={seats}/>
        <FormSeat 
        seats={seats}
        seatI={seatI}
        onSeatBook={onSeatBook}
        onSeatVaciar={onSeatVaciar}
        onAddNewSeat={onAddNewSeat}
        />       
        </>
    );
};
 


export default Main;    
