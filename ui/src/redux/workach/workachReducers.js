import {
    FETCH_WORKACH_REQUEST,
    FETCH_WORKACH_SUCCESS,
    FETCH_WORKACH_FAILED,
    ADD_WORKACH_REQUEST,
    ADD_WORKACH_FAILED,
    UPDATE_WORKACH_FAILED,
    UPDATE_WORKACH_REQUEST,
    DELETE_WORKACH_REQUEST,
    DELETE_WORKACH_FAILED,
} from './workachTypes'

const initialState = {
    loading: false,
    workach_array: [],
    message: ''
}

const workachReducers = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_WORKACH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_WORKACH_SUCCESS:
            return {
                ...state,
                workach_array: action.payload
            }
        case FETCH_WORKACH_FAILED:
            return {
                ...state,
                message: action.payload
            }
        case ADD_WORKACH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_WORKACH_FAILED:
            return {
                ...state,
                message: action.payload
            }
        case UPDATE_WORKACH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_WORKACH_FAILED:
            return {
                ...state,
                message: action.payload
            }
        case DELETE_WORKACH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_WORKACH_FAILED:
            return {
                ...state,
                message: action.payload
            }
        
        default: return state
    }
}

export default workachReducers