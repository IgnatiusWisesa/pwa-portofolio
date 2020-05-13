import {
    //
    // education
    OPEN_ADD_EDUCATION,
    CLOSE_ADD_EDUCATION,
    OPEN_UPDATE_EDUCATION,
    CLOSE_UPDATE_EDUCATION,
    OPEN_DELETE_EDUCATION,
    CLOSE_DELETE_EDUCATION,
    //
    // work-ach
    OPEN_ADD_WORKACH,
    CLOSE_ADD_WORKACH,
    SELECT_OPTIONS_WORKACH,
    DESELECT_OPTIONS_WORKACH,
    ADD_OPTIONS_WORKACH,
    DELETE_OPTIONS_WORKACH,
    OPEN_UPDATE_WORKACH_REQUEST,
    OPEN_UPDATE_WORKACH_SUCCESS,
    OPEN_UPDATE_WORKACH_FAILED,
    CLOSE_UPDATE_WORKACH,
    UPDATE_DESCRIPTION_WORKACH,
    ADD_UPDATE_DESCRIPTION_WORKACH,
    DELETE_UPDATE_DESCRIPTION_WORKACH,
    OPEN_DELETE_WORKACH,
    CLOSE_DELETE_WORKACH,
    // 
    // org-ex
    OPEN_ADD_ORGEX,
    CLOSE_ADD_ORGEX,
    SELECT_OPTIONS_ORGEX,
    DESELECT_OPTIONS_ORGEX,
    ADD_OPTIONS_ORGEX,
    DELETE_OPTIONS_ORGEX,
    OPEN_UPDATE_ORGEX_REQUEST,
    OPEN_UPDATE_ORGEX_SUCCESS,
    OPEN_UPDATE_ORGEX_FAILED,
    CLOSE_UPDATE_ORGEX,
    UPDATE_DESCRIPTION_ORGEX,
    ADD_UPDATE_DESCRIPTION_ORGEX,
    DELETE_UPDATE_DESCRIPTION_ORGEX,
    OPEN_DELETE_ORGEX,
    CLOSE_DELETE_ORGEX
} from "./modalsTypes"
import Axios from "axios"
import { apiUrlAdmin } from "../../helper/URL"

// 
// education
export const openAddEducation = () => {
    return {
        type: OPEN_ADD_EDUCATION
    }
}

export const closeAddEducation = () => {
    return {
        type: CLOSE_ADD_EDUCATION
    }
}

export const openUpdateEducation = ( id ) => {
    return {
        type: OPEN_UPDATE_EDUCATION,
        payload: id
    }
}

export const closeUpdateEducation = () => {
    return {
        type: CLOSE_UPDATE_EDUCATION
    }
}

export const openDeleteEducation = ( id ) => {
    return {
        type: OPEN_DELETE_EDUCATION,
        payload: id
    }
}

export const closeDeleteEducation = () => {
    return {
        type: CLOSE_DELETE_EDUCATION
    }
}

//
// work-ach
export const openAddWorkach = () => {
    return {
        type: OPEN_ADD_WORKACH
    }
}

export const closeAddWorkach = () => {
    return {
        type: CLOSE_ADD_WORKACH
    }
}

export const selectOptionsWorkach = ( options ) => {
    if ( options ) {
        return {
            type: SELECT_OPTIONS_WORKACH,
            payload: [1]
        }
    } else {
        return {
            type: DESELECT_OPTIONS_WORKACH
        }
    }
}

export const addOptionsWorkach = () => {
    return {
        type: ADD_OPTIONS_WORKACH
    }
}

export const deleteOptionsWorkach = () => {
    return {
        type: DELETE_OPTIONS_WORKACH
    }
}

const openUpdateWorkachRequest = () => {
    return {
        type: OPEN_UPDATE_WORKACH_REQUEST
    }
}

const openUpdateWorkachSuccess = ( workach_update_array ) => {
    return {
        type: OPEN_UPDATE_WORKACH_SUCCESS,
        payload: workach_update_array
    }
}

const openUpdateWorkachFailed = ( message ) => {
    return {
        type: OPEN_UPDATE_WORKACH_FAILED,
        payload: message
    }
}

export const clickUpdateWorkach = ( id ) => {
    return (
        ( dispatch ) => {
            dispatch(openUpdateWorkachRequest())
            Axios.post(`${apiUrlAdmin}/get-workach-update`, {id})
            .then((res) => {
                if (res.data.error) {
                    dispatch(openUpdateWorkachFailed(res.data.message))
                } else {
                    dispatch(openUpdateWorkachSuccess(res.data.result))
                }
            }).catch((err) => {
                dispatch(openUpdateWorkachFailed(err.message))
            })
        }
    )
}

export const closeUpdateWorkach = () => {
    return {
        type: CLOSE_UPDATE_WORKACH,
        payload: {}
    }
}

export const updateDescriptionWorkach = ( val, index, updateDescription ) => {
    let newDescription = [...updateDescription]
    newDescription[index] = val

    return {
        type: UPDATE_DESCRIPTION_WORKACH,
        payload: newDescription
    }
}

export const addUpdateDescriptionWorkach = ( updateDescription ) => {
    let newDescription = [...updateDescription]
    newDescription[updateDescription.length] = null

    return {
        type: ADD_UPDATE_DESCRIPTION_WORKACH,
        payload: newDescription
    }
}

export const deleteUpdateDescriptionWorkach = ( updateDescription ) => {
    let newDescription = [...updateDescription]
    newDescription.pop()

    return {
        type: DELETE_UPDATE_DESCRIPTION_WORKACH,
        payload: newDescription
    }
}

export const openDeleteWorkach = ( id ) => {
    return {
        type: OPEN_DELETE_WORKACH,
        payload: id
    }
}

export const closeDeleteWorkach = () => {
    return {
        type: CLOSE_DELETE_WORKACH
    }
}

//
// org-ex
export const openAddOrgex = () => {
    return {
        type: OPEN_ADD_ORGEX
    }
}

export const closeAddOrgex = () => {
    return {
        type: CLOSE_ADD_ORGEX
    }
}

export const selectOptionsOrgex = ( options ) => {
    if ( options ) {
        return {
            type: SELECT_OPTIONS_ORGEX,
            payload: [1]
        }
    } else {
        return {
            type: DESELECT_OPTIONS_ORGEX
        }
    }
}

export const addOptionsOrgex = () => {
    return {
        type: ADD_OPTIONS_ORGEX
    }
}

export const deleteOptionsOrgex = () => {
    return {
        type: DELETE_OPTIONS_ORGEX
    }
}

const openUpdateOrgexRequest = () => {
    return {
        type: OPEN_UPDATE_ORGEX_REQUEST
    }
}

const openUpdateOrgexSuccess = ( orgex_update_array ) => {
    return {
        type: OPEN_UPDATE_ORGEX_SUCCESS,
        payload: orgex_update_array
    }
}

const openUpdateOrgexFailed = ( message ) => {
    return {
        type: OPEN_UPDATE_ORGEX_FAILED,
        payload: message
    }
}

export const clickUpdateOrgex = ( id ) => {
    return (
        ( dispatch ) => {
            dispatch(openUpdateOrgexRequest())
            Axios.post(`${apiUrlAdmin}/get-orgex-update`, {id})
            .then((res) => {
                if (res.data.error) {
                    dispatch(openUpdateOrgexFailed(res.data.message))
                } else {
                    dispatch(openUpdateOrgexSuccess(res.data.result))
                }
            }).catch((err) => {
                dispatch(openUpdateOrgexFailed(err.message))
            })
        }
    )
}

export const closeUpdateOrgex = () => {
    return {
        type: CLOSE_UPDATE_ORGEX,
        payload: {}
    }
}

export const updateDescriptionOrgex = ( val, index, updateDescriptionO ) => {
    let newDescriptionO = [...updateDescriptionO]
    newDescriptionO[index] = val

    return {
        type: UPDATE_DESCRIPTION_ORGEX,
        payload: newDescriptionO
    }
}

export const addUpdateDescriptionOrgex = ( updateDescriptionO ) => {
    let newDescriptionO = [...updateDescriptionO]
    newDescriptionO[updateDescriptionO.length] = null

    return {
        type: ADD_UPDATE_DESCRIPTION_ORGEX,
        payload: newDescriptionO
    }
}

export const deleteUpdateDescriptionOrgex = ( updateDescriptionO ) => {
    let newDescriptionO = [...updateDescriptionO]
    newDescriptionO.pop()

    return {
        type: DELETE_UPDATE_DESCRIPTION_ORGEX,
        payload: newDescriptionO
    }
}

export const openDeleteOrgex = ( id ) => {
    return {
        type: OPEN_DELETE_ORGEX,
        payload: id
    }
}

export const closeDeleteOrgex = () => {
    return {
        type: CLOSE_DELETE_ORGEX
    }
}