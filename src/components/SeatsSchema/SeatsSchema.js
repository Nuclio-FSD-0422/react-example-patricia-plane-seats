import React from 'react';
import './SeatsSchema.css';
import SeatInfo from '../SeatInfo/SeatInfo.js' ;


const SeatsSchema = (props) => {
    const seatsInfo = props.seatsInfo ;
    const onSeatClick = props.onSeatClick


    return (
        <div>
            <div>
                <h2>Visión general de los sitios</h2>
            </div>
            <div className='seats-schema-container'>
                {
                    seatsInfo.map((seat, index) => {
                        return <SeatInfo 
                        key={index} 
                        seat={seat} 
                        seatI={index}
                        onSeatClick={onSeatClick}/>
                    } ) 
               }
            </div>
        </div>
    );
};



export default SeatsSchema;
