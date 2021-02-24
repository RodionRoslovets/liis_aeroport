import { put, takeEvery } from 'redux-saga/effects'

async function getFlights() {
    let result = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/2021-03-28", {
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

export function* helloSaga() {
    let ccc = yield getFlights()

    console.log(ccc)

    yield put({ type: 'SETFLIGHTS', payload:ccc })
}