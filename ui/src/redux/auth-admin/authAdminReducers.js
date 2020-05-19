import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILED,
    ADMIN_VERIFY_REQUEST,
    ADMIN_VERIFY_FAILED
} from './authAdminTypes'

const initialState = {
    loading: false,
    accessToken: '',
    message: ''
}

const authAdminReducers = ( state = initialState, action ) => {
    switch(action.type) {
        case ADMIN_VERIFY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADMIN_VERIFY_FAILED:
            return {
                ...state,
                loading: false,
                message: action.payload,
                accessToken: ''
            }
        case ADMIN_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                accessToken: action.token,
                message: action.message
            }
        case ADMIN_LOGIN_FAILED:
            console.log('ini login failed')
            return {
                ...state,
                loading: false,
                message: action.payload,
                accessToken: ''
            }
        
        default: return state
    }
}

export default authAdminReducers