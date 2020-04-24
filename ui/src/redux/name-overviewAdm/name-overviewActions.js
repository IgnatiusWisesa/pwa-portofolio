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
    FETCH_OVERVIEW_FAILED
} from './name-overviewTypes'

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

export const fetchName =()=> {
    return(
        (dispatch) => {
            dispatch(fetchNameRequest())
            Axios.get(`${apiUrlAdmin}/get-name`)
            .then((res) => {
                dispatch(fetchNameSuccess(res.data[0].name))
            }).catch((err) => {
                dispatch(fetchNameFailed(err.message))
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
                dispatch(fetchOverviewSuccess(res.data[0].overview))
            }).catch((err) => {
                dispatch(fetchOverviewFailed(err.message))
            })
        }
    )
}