import {generate} from 'shortid';

let login = {
    isLogIn: sessionStorage.getItem('isLogIn') ? sessionStorage.getItem('isLogIn') : false
}

let form = {
    email:'',
    password:'',
    emailValid:false,
    passwordValid:false,
    formValid:false,
    formErrors:{
        email:'',
        password:'',
    }
}

let date = new Date()

let imgs = [
    "./img/Rectangle 23.png", 
    "./img/Rectangle 24.png" ,
    "./img/Rectangle 28.png" 
]

let flights = []
const reducer = (state = {...login, ...form, imgs, date, flights}, action)=>{
    switch(action.type){
        case 'LOGIN':
            if(state.formValid){
                sessionStorage.setItem('isLogIn', true)

                return {...state, isLogIn:true}
            } else {
                break
            }
        case 'LOGOUT':
                sessionStorage.removeItem('isLogIn')

                return {...state, isLogIn:false}
            
        case 'EMAILINPUT':
            let isemailValid = action.payload.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            let emailErrorMessage = isemailValid ? '' : 'Неверный емейл'
            return {
                ...state, 
                email:action.payload,
                emailValid: isemailValid ? true : false,
                formErrors:{
                    email:emailErrorMessage,
                    password: state.formErrors.password
                },
                formValid: isemailValid && state.passwordValid,
            }
        case 'PASSWORDINPUT':
            let exp = /([\w\d])/i,
                cyr = /([а-я])/i,
                passValid = exp.test(action.payload)

            let isPassValid = passValid && !action.payload.match(cyr) && action.payload.length >= 8,
                passErrorMessage = isPassValid ? '' : 'Только латинские символы и цифры, длина не менее 8 символов'
            return {
                ...state, 
                password:action.payload,
                passwordValid: isPassValid,
                formErrors:{
                    email:state.formErrors.email,
                    password: passErrorMessage
                },
                formValid: isPassValid && state.emailValid,
            }
        case 'SETFLIGHTS':
            let newFlights = []

            action.payload.Quotes.forEach((flight)=>{
                let carriers =[]

                action.payload.Carriers.forEach(carrier=>{
                    if(flight.OutboundLeg.CarrierIds.indexOf(carrier.CarrierId) !== -1){
                        carriers.push(carrier.Name)
                    }
                })

                carriers = carriers.join(', ')

                let newFlight = {
                    price: flight.MinPrice,
                    dateTime: flight.QuoteDateTime,
                    carriers,
                    id:generate()
                }

                newFlights.push(newFlight)
            })

            return {
                ...state,
                flights:newFlights
            }
        default:
            return state
    }
}

export default reducer