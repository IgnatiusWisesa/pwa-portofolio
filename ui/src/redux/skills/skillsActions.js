import Axios from 'axios'
import {
    apiUrlAdmin
} from '../../helper/URL'
import {
    FETCH_CS_REQUEST,
    FETCH_CS_SUCCESS,
    FETCH_CS_FAILED,
    POST_CS_REQUEST,
    POST_CS_FAILED,
    DELETE_CS_REQUEST,
    DELETE_CS_FAILED,
    FETCH_NCS_REQUEST,
    FETCH_NCS_SUCCESS,
    FETCH_NCS_FAILED,
    POST_NCS_FAILED,
    POST_NCS_REQUEST,
    DELETE_NCS_REQUEST,
    DELETE_NCS_FAILED
} from './skillsTypes'

//
// Computational Skill Actions
const fetchCsRequest = () => {
    return{
        type: FETCH_CS_REQUEST
    }
}

const fetchCsSuccess = ( compskills ) => {
    return {
        type: FETCH_CS_SUCCESS,
        payload: compskills
    }
}

const fetchCsFailed = ( message ) => {
    return {
        type: FETCH_CS_FAILED,
        payload: message
    }
}

export const fetchCs = () => {
    return(
        ( dispatch ) => {
            dispatch(fetchCsRequest())
            Axios.get(`${apiUrlAdmin}/get-compskills`)
            .then((res) => {
                dispatch(fetchCsSuccess(res.data.result))
            }).catch((err) => {
                dispatch(fetchCsFailed(err.message))
            })
        }
    )
}

const postCsRequest = () => {
    return {
        type: POST_CS_REQUEST
    }
}

const postCsFailed = ( message ) => {
    return {
        type: POST_CS_FAILED,
        payload: message
    }
}

export const postCs = ( skill ) => {
    return(
        ( dispatch ) => {
            dispatch(postCsRequest())
            Axios.post(`${apiUrlAdmin}/add-compskills`, {skill})
            .then(() => {
                dispatch(fetchCsRequest())
                Axios.get(`${apiUrlAdmin}/get-compskills`)
                .then((res) => {
                    dispatch(fetchCsSuccess(res.data.result))
                }).catch((err) => {
                    dispatch(fetchCsFailed(err.message))
                })
            }).catch((err) => {
                dispatch(postCsFailed(err.message))
            })
        }
    )
}

const deleteCsRequest = () => {
    return {
        type: DELETE_CS_REQUEST
    }
}

const deleteCsFailed = ( message ) => {
    return {
        type: DELETE_CS_FAILED,
        payload: message
    }
}

export const deleteCs = ( id ) => {
    return (
        ( dispatch ) => {
            dispatch(deleteCsRequest())
            Axios.post(`${apiUrlAdmin}/delete-compskills`, {id})
            .then(() => {
                dispatch(fetchCsRequest())
                Axios.get(`${apiUrlAdmin}/get-compskills`)
                .then((res) => {
                    dispatch(fetchCsSuccess(res.data.result))
                }).catch((err) => {
                    dispatch(fetchCsFailed(err.message))
                })
            }).catch((err) => {
                dispatch(deleteCsFailed(err.message))
            })
        }
    )
}

//
// Non Computational Skill Actions
const fetchNcsRequest = () => {
    return{
        type: FETCH_NCS_REQUEST
    }
}

const fetchNcsSuccess = ( compskills ) => {
    return {
        type: FETCH_NCS_SUCCESS,
        payload: compskills
    }
}

const fetchNcsFailed = ( message ) => {
    return {
        type: FETCH_NCS_FAILED,
        payload: message
    }
}

export const fetchNcs = () => {
    return(
        ( dispatch ) => {
            dispatch(fetchNcsRequest())
            Axios.get(`${apiUrlAdmin}/get-noncompskills`)
            .then((res) => {
                dispatch(fetchNcsSuccess(res.data.result))
            }).catch((err) => {
                dispatch(fetchNcsFailed(err.message))
            })
        }
    )
}

const postNcsRequest = () => {
    return {
        type: POST_NCS_REQUEST
    }
}

const postNcsFailed = ( message ) => {
    return {
        type: POST_NCS_FAILED,
        payload: message
    }
}

export const postNcs = ( skill ) => {
    return(
        ( dispatch ) => {
            dispatch(postNcsRequest())
            Axios.post(`${apiUrlAdmin}/add-noncompskills`, {skill})
            .then(() => {
                dispatch(fetchNcsRequest())
                Axios.get(`${apiUrlAdmin}/get-noncompskills`)
                .then((res) => {
                    dispatch(fetchNcsSuccess(res.data.result))
                }).catch((err) => {
                    dispatch(fetchNcsFailed(err.message))
                })
            }).catch((err) => {
                dispatch(postNcsFailed(err.message))
            })
        }
    )
}

const deleteNcsRequest = () => {
    return {
        type: DELETE_NCS_REQUEST
    }
}

const deleteNcsFailed = ( message ) => {
    return {
        type: DELETE_NCS_FAILED,
        payload: message
    }
}

export const deleteNcs = ( id ) => {
    return (
        ( dispatch ) => {
            dispatch(deleteNcsRequest())
            Axios.post(`${apiUrlAdmin}/delete-noncompskills`, {id})
            .then(() => {
                dispatch(fetchNcsRequest())
                Axios.get(`${apiUrlAdmin}/get-noncompskills`)
                .then((res) => {
                    dispatch(fetchNcsSuccess(res.data.result))
                }).catch((err) => {
                    dispatch(fetchNcsFailed(err.message))
                })
            }).catch((err) => {
                dispatch(deleteNcsFailed(err.message))
            })
        }
    )
}