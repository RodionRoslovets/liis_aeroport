import React from 'react';
import {connect} from 'react-redux';

const FlightList = ({flights = [1,2,3]}) => {
    let flightsList = flights.map((flight, index) => {
        return (
            <div>
                flight {index}
            </div>
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