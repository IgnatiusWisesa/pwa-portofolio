import {
    OPEN_ADD_EDUCATION, 
    CLOSE_ADD_EDUCATION,
    OPEN_UPDATE_EDUCATION,
    CLOSE_UPDATE_EDUCATION,
    OPEN_DELETE_EDUCATION,
    CLOSE_DELETE_EDUCATION
} from './modalsTypes'

const initialState = {
    add_education: false,
    update_education: false,
    update_education_id: -1,
    delete_education: false,
    delete_education_id: -1
}

const modalsReducers = ( state=initialState, action ) => {
    switch(action.type) {
        case OPEN_ADD_EDUCATION:
            return {
                ...state,
                add_education: true
            }
        case CLOSE_ADD_EDUCATION:
            return {
                ...state,
                add_education: false
            }
        case OPEN_UPDATE_EDUCATION:
            return {
                ...state,
                update_education_id: action.payload,
                update_education: true
            }
        case CLOSE_UPDATE_EDUCATION:
            return {
                ...state,
                update_education: false
            }
        case OPEN_DELETE_EDUCATION:
            return {
                ...state,
                delete_education_id: action.payload,
                delete_education: true
            }
        case CLOSE_DELETE_EDUCATION:
            return {
                ...state,
                delete_education: false
            }

        default: return state
    }
}

export default modalsReducers