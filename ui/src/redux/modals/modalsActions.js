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
    CLOSE_ADD_WORKACH
} from "./modalsTypes"

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