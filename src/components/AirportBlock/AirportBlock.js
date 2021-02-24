import React from 'react';
import { connect } from 'react-redux';
import FlightList from '../FlightList/FlightList';
import ImageCarousel from '../ImageCarousel/imageCarousel';

const AirportBlock = ({date}) => {
    let year = date.getFullYear(),
        month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth(),
        day = date.getDate()

    return ( 
        <div>
            <h3>Вылеты 
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9.66667 9.66667L1 18.3333" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            SVO - JFK</h3>
            {/* <input type="date" value={`${year}-${month}-${day}`}/> */}

            <ImageCarousel></ImageCarousel>

            <div>Добавлено в Избранное: рейсов</div>

            <FlightList></FlightList>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        date: state.date
    }
}
 
export default connect(mapStateToProps, null)(AirportBlock);