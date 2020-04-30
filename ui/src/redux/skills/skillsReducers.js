import {
    FETCH_CS_REQUEST,
    FETCH_CS_SUCCESS,
    FETCH_CS_FAILED,
    POST_CS_REQUEST,
    POST_CS_FAILED,
    DELETE_CS_REQUEST,
    DELETE_CS_FAILED,
    FETCH_NCS_REQUEST,
    FETCH_NCS_SUCCESS,
    FETCH_NCS_FAILED,
    POST_NCS_REQUEST,
    POST_NCS_FAILED,
    DELETE_NCS_REQUEST,
    DELETE_NCS_FAILED
} from './skillsTypes'

const initialState = {
    loading: false,
    compSkills: [],
    nonCompSkills: [],
    message: ''
}

const skillsReducers = ( state=initialState, action ) => {
    switch(action.type) {
        case FETCH_CS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CS_SUCCESS:
            return {
                ...state,
                compSkills: action.payload,
                loading: false
            }
        case FETCH_CS_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case POST_CS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_CS_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case DELETE_CS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_CS_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case FETCH_NCS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_NCS_SUCCESS:
            return {
                ...state,
                nonCompSkills: action.payload,
                loading: false
            }
        case FETCH_NCS_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case POST_NCS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_NCS_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case DELETE_NCS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_NCS_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }

        default: return state
    }
}

export default skillsReducers