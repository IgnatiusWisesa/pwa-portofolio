import {
    OPEN_ADD_EDUCATION, 
    CLOSE_ADD_EDUCATION,
    OPEN_UPDATE_EDUCATION,
    CLOSE_UPDATE_EDUCATION,
    OPEN_DELETE_EDUCATION,
    CLOSE_DELETE_EDUCATION,
    OPEN_ADD_WORKACH,
    CLOSE_ADD_WORKACH
} from './modalsTypes'

const initialState = {
    add_education: false,
    update_education: false,
    update_education_id: -1,
    delete_education: false,
    delete_education_id: -1,
    add_workach: false
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
        case OPEN_ADD_WORKACH:
            return {
                ...state,
                add_workach: true
            }
        case CLOSE_ADD_WORKACH:
            return {
                ...state,
                add_workach: false
            }

        default: return state
    }
}

export default modalsReducers