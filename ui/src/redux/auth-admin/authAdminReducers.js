import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILED
} from './authAdminTypes'

const initialState = {
    loading: false,
    data: [],
    message: ''
}

const authAdminReducers = ( state = initialState, action ) => {
    switch(action.type) {
        case ADMIN_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case ADMIN_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        
        default: return state
    }
}

export default authAdminReducers