import {
    FETCH_EDUCATION_REQUEST,
    FETCH_EDUCATION_SUCCESS,
    FETCH_EDUCATION_FAILED,
    REARRANGE_EDUCATION_ARRAY_REQUEST,
    REARRANGE_EDUCATION_ARRAY_FAILED,
    ADD_EDUCATION_REQUEST,
    ADD_EDUCATION_FAILED,
    UPDATE_EDUCATION_REQUEST,
    UPDATE_EDUCATION_FAILED,
    DELETE_EDUCATION_REQUEST,
    DELETE_EDUCATION_FAILED
} from './educationTypes'

const initialState = {
    loading: false,
    education_array: [],
    message: ''
}

const educationReducers = ( state=initialState, action ) => {
    switch(action.type) {
        case FETCH_EDUCATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EDUCATION_SUCCESS:
            return {
                ...state,
                education_array: action.payload,
                loading: false
            }
        case FETCH_EDUCATION_FAILED:
            return {
                ...state,
                message: action.payload
            }
        case REARRANGE_EDUCATION_ARRAY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REARRANGE_EDUCATION_ARRAY_FAILED:
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        case ADD_EDUCATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_EDUCATION_FAILED:
            return {
                ...state,
                message: action.payload
            }
        case UPDATE_EDUCATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_EDUCATION_FAILED:
            return {
                ...state,
                message: action.payload
            }
        case DELETE_EDUCATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_EDUCATION_FAILED:
            return {
                ...state,
                message: action.payload
            }
        
        default: return state
    }
}

export default educationReducers