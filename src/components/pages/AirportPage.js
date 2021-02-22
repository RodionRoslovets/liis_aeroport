import React from 'react';
import {connect} from "react-redux";
import * as actions from '../../actions'
import AirportBlock from '../AirportBlock/AirportBlock';

const AirportPage = ({logOut}) => {
    return ( 
        <div>
            <button onClick={logOut}>Logout</button>

            <AirportBlock/>
        </div>
    );
}

export default connect(null, actions)(AirportPage);