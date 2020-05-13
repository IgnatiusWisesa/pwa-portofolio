import {
    FETCH_ORGEX_REQUEST,
    FETCH_ORGEX_SUCCESS,
    FETCH_ORGEX_FAILED,
    REARRANGE_ORGEX_ARRAY_REQUEST,
    REARRANGE_ORGEX_ARRAY_FAILED,
    ADD_ORGEX_REQUEST,
    ADD_ORGEX_FAILED,
    UPDATE_ORGEX_REQUEST,
    UPDATE_ORGEX_FAILED,
    DELETE_ORGEX_REQUEST,
    DELETE_ORGEX_FAILED
} from './orgexTypes'

const initialState = {
    loading: false,
    orgex_array: [],
    message: ''
}

const orgexReducers = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_ORGEX_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ORGEX_SUCCESS:
            return {
                ...state,
                orgex_array: action.payload
            }
        case FETCH_ORGEX_FAILED:
            return {
                ...state,
                message: action.payload
            }
        case REARRANGE_ORGEX_ARRAY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REARRANGE_ORGEX_ARRAY_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case ADD_ORGEX_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_ORGEX_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case UPDATE_ORGEX_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_ORGEX_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case DELETE_ORGEX_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_ORGEX_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        
        default: return state
    }
}

export default orgexReducers