import React from 'react';
import {connect} from "react-redux";
import * as actions from '../../actions'

const AirportPage = ({logOut}) => {
    return ( 
        <div>
            AirportPage
            <button onClick={logOut}>Logout</button>
        </div>
    );
}

export default connect(null, actions)(AirportPage);