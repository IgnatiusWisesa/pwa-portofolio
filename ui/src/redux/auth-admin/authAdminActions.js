import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILED,
    ADMIN_VERIFY_FAILED,
    ADMIN_VERIFY_REQUEST,
    ADMIN_LOGOUT
} from './authAdminTypes'
import Axios from 'axios'
import { apiUrlAuth } from '../../helper/URL'

const adminVerifyRequest = () => {
    return {
        type: ADMIN_VERIFY_REQUEST
    }
}

const adminVerifyFailed = ( message ) => {
    return {
        type: ADMIN_VERIFY_FAILED,
        payload: message
    }
}

export const adminVerify = ( token ) => {
    return (
        ( dispatch ) => {
            dispatch(adminVerifyRequest())
            Axios.post(`${apiUrlAuth}/admin-verify`, null , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                console.log(res.data)
                let message = res.data.message
                dispatch(adminLoginSuccess(message, token))
            }).catch((err) => {
                dispatch(adminVerifyFailed(err.message))
            })
        }
    )
}

const adminLoginRequest = () => {
    return {
        type: ADMIN_LOGIN_REQUEST
    }
}

const adminLoginSuccess = ( message, token ) => {
    localStorage.setItem("pwa_portfolio", token);
    return {
        type: ADMIN_LOGIN_SUCCESS,
        message,
        token
    }
}

const adminLoginFailed = ( message ) => {
    return {
        type: ADMIN_LOGIN_FAILED,
        payload: message
    }
}

export const adminLogin = ( data ) => {
    return (
        ( dispatch ) => {
            dispatch(adminLoginRequest())
            Axios.post(`${apiUrlAuth}/admin-login`, data)
            .then((res) => {
                if(res.data.error) {
                    dispatch(adminLoginFailed(res.data.message))
                } else {
                    Axios.post(`${apiUrlAuth}/admin-verify`, null , {
                        headers: {
                            Authorization: `Bearer ${res.data.result}`
                        }
                    })
                    .then((res1) => {
                        let message = res1.data.message
                        dispatch(adminLoginSuccess(message, res.data.result))
                    }).catch((err1) => {
                        dispatch(adminVerifyFailed(err1.message))
                    })
                }
            }).catch((err) => {
                dispatch(adminLoginFailed(err.message))
            })
        } 
    )
}

export const adminLogout = () => {
    localStorage.clear()
    return {
        type: ADMIN_LOGOUT,
        message: 'wrong token!'
    }
}