import React from 'react';
import FlightList from '../FlightList/FlightList';
import ImageCarousel from '../ImageCarousel/imageCarousel';

const AirportBlock = () => {
    return ( 
        <div>
            <h3>Вылеты 
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9.66667 9.66667L1 18.3333" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            SVO - JFK</h3>
            {/* <input type="date" value="2018-07-22"/> */}

            <ImageCarousel></ImageCarousel>

            <div>Добавлено в Избранное: рейсов</div>

            <FlightList></FlightList>
        </div>
     );
}
 
export default AirportBlock;