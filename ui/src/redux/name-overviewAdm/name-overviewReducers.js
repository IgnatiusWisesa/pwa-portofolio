import {
    FETCH_NAME_REQUEST,
    FETCH_NAME_SUCCESS,
    FETCH_NAME_FAILED,
    FETCH_OVERVIEW_REQUEST,
    FETCH_OVERVIEW_SUCCESS,
    FETCH_OVERVIEW_FAILED,
    UPDATE_NAME_REQUEST,
    UPDATE_NAME_SUCCESS,
    UPDATE_NAME_FAILED
} from './name-overviewTypes'

const initialState = {
    loading: false,
    user: [],
    overview: '',
    message: ''
}

const nameOverviewReducers = ( state=initialState, action ) => {
    switch(action.type){
        case FETCH_NAME_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_NAME_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case FETCH_NAME_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case UPDATE_NAME_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_NAME_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case UPDATE_NAME_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case FETCH_OVERVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_OVERVIEW_SUCCESS:
            return {
                ...state,
                overview: action.payload,
                loading: false
            }
        case FETCH_OVERVIEW_FAILED:
            return {
                ...state,
                overview: action.payload,
                loading: false
            }
        default: return state
    }
}

export default nameOverviewReducers