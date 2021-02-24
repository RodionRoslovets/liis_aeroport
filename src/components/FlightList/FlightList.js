import React from 'react';
import {connect} from 'react-redux';
import PlaneIcon from './planeIcon';

const FlightList = ({flights}) => {
    let flightsList = flights.map(flight => {
        return (
            <li key={flight.id}>
                <PlaneIcon/>
                <div>
                    {flight.dateTime}
                    <br/>
                    {flight.carriers}
                </div>
                <div>
                    {flight.price} руб
                </div>
            </li>
        )
    })
    return ( 
        <ul>
            {flightsList}
        </ul>
     );
}

const mapStateToProps = state => {
    return {
        flights: state.flights
    }
}
export default connect(mapStateToProps, null)(FlightList);