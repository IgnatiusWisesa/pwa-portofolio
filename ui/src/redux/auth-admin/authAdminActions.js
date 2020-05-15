import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILED
} from './authAdminTypes'
import Axios from 'axios'
import { apiUrlAuth } from '../../helper/URL'

const adminLoginRequest = () => {
    return {
        type: ADMIN_LOGIN_REQUEST
    }
}

const adminLoginSuccess = ( data ) => {
    return {
        type: ADMIN_LOGIN_SUCCESS,
        payload: data
    }
}

const adminLoginFailed = ( message ) => {
    return {
        type: ADMIN_LOGIN_FAILED,
        payload: message
    }
}

export const adminLogin = ( data ) => {
    console.log('masuk login action', data)
    return (
        ( dispatch ) => {
            dispatch(adminLoginRequest())
            Axios.post(`${apiUrlAuth}/admin-login`, data)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                dispatch(adminLoginFailed(err.message))
            })
        } 
    )
}