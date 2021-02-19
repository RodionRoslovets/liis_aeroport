import React from 'react';
import style from './AuthPage.module.scss';

import { connect } from 'react-redux';
import AuthForm from '../Form/authForm';

const AuthPage = ({state}) => {
    return ( 
        <div className={style.auth_page}>
            <AuthForm/>
        </div>
     );
}
 
export default AuthPage;