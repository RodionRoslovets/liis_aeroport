import React from 'react';
import {connect} from 'react-redux';
import PlaneIcon from './planeIcon';
import * as actions from '../../actions'
import style from './FlightList.module.scss'

const FlightList = ({flights, addToFavs, removeFromFavs}) => {
    let months = ['January', 'Febriary', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemer', 'October', 'November', 'December']
    
    function checkFavs(e){
        if(e.target.classList.contains('in-favs')){
            e.target.classList.remove('in-favs')
            removeFromFavs()
        } else {
            e.target.classList.add('in-favs')
            addToFavs()
        }
    }

    let flightsList = flights.map(flight => {
        let dateObj = new Date(flight.dateTime)

        let date = `${dateObj.getDate()} ${months[dateObj.getMonth()]}, ${dateObj.getFullYear()}`,
            time = `${dateObj.getHours() < 10 ? '0' + dateObj.getHours() : dateObj.getHours()}:${dateObj.getMinutes() < 10 ? '0' + dateObj.getMinutes() : dateObj.getMinutes()}`
        return (
            <li className={style.flightList__item} key={flight.id}>
                
                <div className={style.flightList__main}>
                    <PlaneIcon className={style.plane}/>
                    <div className={style.flightList__data}>
                        <p>Moscow (SVO)
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5L13 5" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 1L13 5L9 9" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            New York City (JFK)
                        </p>
                        <p className={style.flightList__date}>
                            {date} &mdash; {time}
                            
                            <br/>
                            {flight.carriers}
                        </p>
                    </div>
                    
                </div>
                <div className={style.flightList__priceBlock}>
                    <span className={style.flightList__favs}>
                        <svg onClick={checkFavs} width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133V2.59133Z" stroke="#878787" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <div className={style.flightList__price}>
                        <span>Price:</span> {flight.price} {flight.currency}
                    </div>
                </div>
            </li>
        )
    })

    return ( 
        <ul className={style.flightList} >
            {flightsList}
        </ul>
     );
}

const mapStateToProps = state => {
    return {
        flights: state.flights
    }
}
export default connect(mapStateToProps, actions)(FlightList);