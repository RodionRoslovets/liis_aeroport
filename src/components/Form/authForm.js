import React from 'react';
import * as actions from '../../actions';
import {connect} from "react-redux";
import style from './authForm.module.scss';

const AuthForm = ({logIn, emailInput, passwordInput, email, password, formErrors, formValid}) => {
    function submitHandler(e){
        e.preventDefault()

        logIn()
    }

    return ( 
        <form onSubmit={submitHandler} className={style.auth_form}>
            <p className={style.form_heading}>Simple Flight Check</p>

            <label>
                <span className={formErrors.email ? style.error : null}>Логин:</span>
                <input className={formErrors.email ? style.error_field : null} type="text" name="liis_email" value={email} onInput={(e)=>{emailInput(e.target.value)}}/>
                
                {formErrors.email ? 
                    <span className={`${style.error} ${style.message}`}>{formErrors.email}</span> : 
                    null}
                
            </label>

            <label>
                <span className={formErrors.password ? style.error : null}>Пароль:</span>
                <input className={formErrors.password ? style.error_field : null} type="password" name="liis_password" value={password} onInput={(e)=>{passwordInput(e.target.value)}}/>
                
                {formErrors.password ? 
                    <span className={`${style.error} ${style.message}`}>{formErrors.password}</span> : 
                    null}
            </label>

            <button className={style.submit_btn} disabled={!formValid} type="submit">Войти</button>
        </form>
     );
}

const mapStateToProps = (state)=>{
    return {
        email:state.email,
        password:state.password,
        formErrors:state.formErrors,
        formValid: state.formValid
    }
}

export default connect(mapStateToProps, actions)(AuthForm)