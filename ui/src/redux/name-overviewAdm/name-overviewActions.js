import Axios from 'axios'
import {
    apiUrlAdmin
} from '../../helper/URL'
import {
    FETCH_NAME_REQUEST,
    FETCH_NAME_SUCCESS,
    FETCH_NAME_FAILED,
    FETCH_OVERVIEW_REQUEST,
    FETCH_OVERVIEW_SUCCESS,
    FETCH_OVERVIEW_FAILED,
    UPDATE_NAME_REQUEST,
    UPDATE_NAME_SUCCESS,
    UPDATE_NAME_FAILED,
    UPDATE_OVERVIEW_REQUEST,
    UPDATE_OVERVIEW_SUCCESS,
    UPDATE_OVERVIEW_FAILED
} from './name-overviewTypes'
import { toast } from 'react-toastify';

//
// name actions
const fetchNameRequest = () => {
    return{
        type: FETCH_NAME_REQUEST
    }
}

const fetchNameSuccess = ( name ) => {
    return{
        type: FETCH_NAME_SUCCESS,
        payload: name
    }
}

const fetchNameFailed = ( message )=> {
    return{
        type: FETCH_NAME_FAILED,
        payload: message
    }
}

export const fetchName = () => {
    return(
        (dispatch) => {
            dispatch(fetchNameRequest())
            Axios.get(`${apiUrlAdmin}/get-name`)
            .then((res) => {
                dispatch(fetchNameSuccess(res.data.result[0].name))
            }).catch((err) => {
                dispatch(fetchNameFailed(err.message))
            })
        }
    )
}

const updateNameRequest = () => {
    return {
        type: UPDATE_NAME_REQUEST
    }
}

const updateNameSuccess = () => {
    return {
        type: UPDATE_NAME_SUCCESS
    }
}

const updateNameFailed = () => {
    return {
        type: UPDATE_NAME_FAILED
    }
}

export const updateName = ( name ) => {
    return(
        ( dispatch ) => {
            dispatch(updateNameRequest())
            Axios.put(`${apiUrlAdmin}/update-name`, {name})
            .then((res) => {
                if(res.data.error){
                    toast.error(res.data.message, {
                        autoClose: 1500
                        });
                } else {
                    toast.success(res.data.message, {
                        autoClose: 1500
                        });
                    dispatch(updateNameSuccess(res.data[0].name))
                }
            }).catch((err) => {
                dispatch(updateNameFailed(err.message))
            })
        }
    )
}

//
// overview actions
const fetchOverviewRequest = () => {
    return {
        type: FETCH_OVERVIEW_REQUEST
    }
}

const fetchOverviewSuccess = ( overview ) => {
    return {
        type: FETCH_OVERVIEW_SUCCESS,
        payload: overview
    }
}

const fetchOverviewFailed = ( message ) => {
    return {
        type: FETCH_OVERVIEW_FAILED,
        payload: message
    }
}

export const fetchOverview = () => {
    return(
        (dispatch) => {
            dispatch(fetchOverviewRequest())
            Axios.get(`${apiUrlAdmin}/get-overview`)
            .then((res) => {
                dispatch(fetchOverviewSuccess(res.data.result[0].overview))
            }).catch((err) => {
                dispatch(fetchOverviewFailed(err.message))
            })
        }
    )
}

const updateOverviewRequest = () => {
    return {
        type: UPDATE_OVERVIEW_REQUEST
    }
}

const updateOverviewSuccess = () => {
    return {
        type: UPDATE_OVERVIEW_SUCCESS
    }
}

const updateOverviewFailed = () => {
    return {
        type: UPDATE_OVERVIEW_FAILED
    }
}

export const updateOverview = ( overview ) => {
    return (
        ( dispatch ) => {
            dispatch(updateOverviewRequest())
            Axios.put(`${apiUrlAdmin}/update-overview`, {overview})
            .then((res) => {
                if(res.data.error){
                    toast.error(res.data.message, {
                        autoClose: 1500
                        });
                } else {
                    toast.success(res.data.message, {
                        autoClose: 1500
                        });
                        dispatch(updateOverviewSuccess(res.data[0].overview))
                }
            }).catch((err) => {
                dispatch(updateOverviewFailed(err.message))
            })
        }
    )
}