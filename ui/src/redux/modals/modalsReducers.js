import {
    OPEN_ADD_EDUCATION, 
    CLOSE_ADD_EDUCATION,
    OPEN_UPDATE_EDUCATION,
    CLOSE_UPDATE_EDUCATION,
    OPEN_DELETE_EDUCATION,
    CLOSE_DELETE_EDUCATION,
    OPEN_ADD_WORKACH,
    CLOSE_ADD_WORKACH,
    SELECT_OPTIONS_WORKACH,
    DESELECT_OPTIONS_WORKACH,
    ADD_OPTIONS_WORKACH,
    DELETE_OPTIONS_WORKACH,
    CLOSE_UPDATE_WORKACH,
    OPEN_UPDATE_WORKACH_REQUEST,
    OPEN_UPDATE_WORKACH_SUCCESS,
    OPEN_UPDATE_WORKACH_FAILED,
    UPDATE_DESCRIPTION_WORKACH,
    ADD_UPDATE_DESCRIPTION_WORKACH,
    DELETE_UPDATE_DESCRIPTION_WORKACH,
    OPEN_DELETE_WORKACH,
    CLOSE_DELETE_WORKACH
} from './modalsTypes'

const initialState = {
    add_education: false,
    update_education: false,
    update_education_id: -1,
    delete_education: false,
    delete_education_id: -1,
    add_workach: false,
    select_options_workach: false,
    array_options_workach: [],
    update_workach: false,
    workach_update_array: [],
    workach_update_description: [],
    delete_workach: false,
    delete_workach_id: -1,
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
                select_options_workach: false,
                array_options_workach: [],
                add_workach: false
            }
        case SELECT_OPTIONS_WORKACH:
            return {
                ...state,
                select_options_workach: true,
                array_options_workach: action.payload
            }
        case DESELECT_OPTIONS_WORKACH:
            return {
                ...state,
                select_options_workach: false,
                array_options_workach: []
            }
        case ADD_OPTIONS_WORKACH:
            return {
                ...state,
                select_options_workach: true,
                array_options_workach: state.array_options_workach.concat([1])
            }
        case DELETE_OPTIONS_WORKACH:
            return {
                ...state,
                array_options_workach: state.array_options_workach.filter((one, idx) => idx !==0)
            }
        case OPEN_UPDATE_WORKACH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case OPEN_UPDATE_WORKACH_SUCCESS:
            return {
                ...state,
                workach_update_array: [action.payload],
                loading: false
            }
        case OPEN_UPDATE_WORKACH_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case CLOSE_UPDATE_WORKACH:
            return {
                ...state,
                workach_update_array: [],
                workach_update_description: [],
                update_workach: false,
            }
        case UPDATE_DESCRIPTION_WORKACH:
            return {
                ...state,
                workach_update_description: action.payload
            }
        case ADD_UPDATE_DESCRIPTION_WORKACH:
            return {
                ...state,
                workach_update_description: action.payload
            }
        case DELETE_UPDATE_DESCRIPTION_WORKACH:
            return {
                ...state,
                workach_update_description: action.payload
            }
        case OPEN_DELETE_WORKACH:
            return {
                ...state,
                delete_workach_id: action.payload,
                delete_workach: true
            }
        case CLOSE_DELETE_WORKACH:
            return {
                ...state,
                delete_workach: false
            }

        default: return state
    }
}

export default modalsReducers