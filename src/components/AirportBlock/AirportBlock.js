import React from 'react';
import { connect } from 'react-redux';
import FlightList from '../FlightList/FlightList';
import ImageCarousel from '../ImageCarousel/imageCarousel';
import * as actions from '../../actions'
import style from './AirportBlock.module.scss'

const AirportBlock = ({getNewFlights, favs}) => {
    function inputHandler(e){
        let target = e.target
        if(target.timer){
            clearTimeout(target.timer)
        }

        target.timer = setTimeout(()=>{
            getNewFlights(target.value)
        }, 1000)
    }
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth(),
        day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return ( 
        <div className={style.airportBlock}>
            <h3>
                <p>Вылеты 
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9.66667 9.66667L1 18.3333" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                SVO - JFK
                </p>
                <input type="date" min={`${year}-${month}-${day}`} onInput={(e)=>{inputHandler(e)}}/>
            </h3>

            <ImageCarousel></ImageCarousel>

            <div className={style.favs}>Добавлено в Избранное: <span>{favs}</span> рейсов</div>

            <FlightList></FlightList>
        </div>
     );
}

const mapStateToProps = state => ({
    favs: state.favs
})
 
export default connect(mapStateToProps, actions)(AirportBlock);