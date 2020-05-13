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
    CLOSE_DELETE_WORKACH,
    OPEN_ADD_ORGEX,
    CLOSE_ADD_ORGEX,
    SELECT_OPTIONS_ORGEX,
    DESELECT_OPTIONS_ORGEX,
    ADD_OPTIONS_ORGEX,
    DELETE_OPTIONS_ORGEX,
    OPEN_UPDATE_ORGEX_REQUEST,
    OPEN_UPDATE_ORGEX_SUCCESS,
    CLOSE_UPDATE_ORGEX,
    OPEN_UPDATE_ORGEX_FAILED,
    UPDATE_DESCRIPTION_ORGEX,
    ADD_UPDATE_DESCRIPTION_ORGEX,
    DELETE_UPDATE_DESCRIPTION_ORGEX,
    OPEN_DELETE_ORGEX,
    CLOSE_DELETE_ORGEX
} from './modalsTypes'

const initialState = {
    // education
    add_education: false,
    update_education: false,
    update_education_id: -1,
    delete_education: false,
    delete_education_id: -1,
    // work-ach
    add_workach: false,
    select_options_workach: false,
    array_options_workach: [],
    update_workach: false,
    workach_update_array: [],
    workach_update_description: [],
    delete_workach: false,
    delete_workach_id: -1,
    // org-ex
    add_orgex: false,
    select_options_orgex: false,
    array_options_orgex: [],
    update_orgex: false,
    orgex_update_array: [],
    orgex_update_description: [],
    delete_orgex: false,
    delete_orgex_id: -1
}

const modalsReducers = ( state=initialState, action ) => {
    switch(action.type) {
        // 
        // education
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
        //
        // work-ach
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
                update_workach: true,
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
        //
        // org-ex
        case OPEN_ADD_ORGEX:
            return {
                ...state,
                add_orgex: true
            }
        case CLOSE_ADD_ORGEX:
            return {
                ...state,
                add_orgex: false,
                select_options_orgex: false,
                array_options_orgex: []
            }
        case SELECT_OPTIONS_ORGEX:
            return {
                ...state,
                select_options_orgex: true,
                array_options_orgex: action.payload
            }
        case DESELECT_OPTIONS_ORGEX:
            return {
                ...state,
                select_options_orgex: false,
                array_options_orgex: []
            }
        case ADD_OPTIONS_ORGEX:
            return {
                ...state,
                select_options_orgex: true,
                array_options_orgex: state.array_options_orgex.concat([1])
            }
        case DELETE_OPTIONS_ORGEX:
            return {
                ...state,
                array_options_orgex: state.array_options_orgex.filter((one, idx) => idx !==0)
            }
        case OPEN_UPDATE_ORGEX_REQUEST:
            return {
                ...state,
                loading: true
            }
        case OPEN_UPDATE_ORGEX_SUCCESS:
            return {
                ...state,
                update_orgex: true,
                orgex_update_array: [action.payload],
                loading: false
            }
        case OPEN_UPDATE_ORGEX_FAILED:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case CLOSE_UPDATE_ORGEX:
            return {
                ...state,
                orgex_update_array: [],
                orgex_update_description: [],
                update_orgex: false,
            }
        case UPDATE_DESCRIPTION_ORGEX:
            return {
                ...state,
                orgex_update_description: action.payload
            }
        case ADD_UPDATE_DESCRIPTION_ORGEX:
            return {
                ...state,
                orgex_update_description: action.payload
            }
        case DELETE_UPDATE_DESCRIPTION_ORGEX:
            return {
                ...state,
                orgex_update_description: action.payload
            }
        case OPEN_DELETE_ORGEX:
            return {
                ...state,
                delete_orgex_id: action.payload,
                delete_orgex: true
            }
        case CLOSE_DELETE_ORGEX:
            return {
                ...state,
                delete_orgex: false
            }

        default: return state
    }
}

export default modalsReducers