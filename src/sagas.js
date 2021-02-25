import { put, takeEvery, all } from 'redux-saga/effects'

let date = new Date()
let today = `${date.getFullYear()}-${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate()}`

async function getFlights(date = today) {
    let result = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/${date}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "981358e5a7msha32e36a7f3d076bp1bf20ajsn8d02c8bd457a",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    })
    if (result.status === 200) {
        let json = result.json()
        return json
    }
    throw new Error('Request is failed')
}

function* getNewFlights(action){
    yield firstSaga(action.payload)
}

function* getAsyncFlights(){
    yield takeEvery('GETNEWFLIGHTS', getNewFlights)
}


function* firstSaga(date = today) {
    let ccc = yield getFlights(date)

    yield put({ type: 'SETFLIGHTS', payload:ccc })
}

export function* root(){
    yield all([
        firstSaga(),
        getAsyncFlights()
    ])
}