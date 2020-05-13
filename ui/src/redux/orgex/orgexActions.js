import {
    FETCH_ORGEX_REQUEST,
    FETCH_ORGEX_SUCCESS,
    FETCH_ORGEX_FAILED,
    REARRANGE_ORGEX_ARRAY_REQUEST,
    REARRANGE_ORGEX_ARRAY_FAILED,
    ADD_ORGEX_REQUEST,
    ADD_ORGEX_FAILED,
    UPDATE_ORGEX_REQUEST,
    UPDATE_ORGEX_FAILED,
    DELETE_ORGEX_REQUEST,
    DELETE_ORGEX_FAILED
} from './orgexTypes'
import Axios from 'axios'
import { apiUrlAdmin } from '../../helper/URL'
import { closeAddOrgex, closeUpdateOrgex, closeDeleteOrgex } from '../modals/modalsActions'
import { toast } from 'react-toastify';

const fetchOrgexRequest = () => {
    return {
        type: FETCH_ORGEX_REQUEST
    }
}

const fetchOrgexSuccess = ( orgex_array ) => {
    return {
        type: FETCH_ORGEX_SUCCESS,
        payload: orgex_array
    }
}

const fetchOrgexFailed = ( message ) => {
    return {
        type: FETCH_ORGEX_FAILED
    }
}

export const fetchOrgex = () => {
    return (
        ( dispatch ) => {
            dispatch(fetchOrgexRequest())
            Axios.get(`${apiUrlAdmin}/get-orgex`)
            .then((res) => {
                dispatch(fetchOrgexSuccess(res.data.resultSuccess))
            }).catch((err) => {
                dispatch(fetchOrgexFailed(err.message))
            })
        }
    )
}

const rearrangeOrgexRequest = () => {
    return {
        type: REARRANGE_ORGEX_ARRAY_REQUEST
    }
}

const rearrangeOrgexFailed = ( message ) => {
    return {
        type: REARRANGE_ORGEX_ARRAY_FAILED,
        payload: message
    }
}

export const rearrangeOrgexArray = ( result, orgex ) => {
    const { destination, source, draggableId } = result

    if (!destination) { 
        return( dispacth ) => {
            dispacth(fetchOrgexSuccess(orgex)) 
        }
    }
    if (destination.droppableId !== source.droppableId) {
        return( dispacth ) => {
            dispacth(fetchOrgexSuccess(orgex)) 
        }
    }
    if (destination.index === source.index) {
        return( dispacth ) => {
            dispacth(fetchOrgexSuccess(orgex)) 
        }
    }
    if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return( dispacth ) => {
            dispacth(fetchOrgexSuccess(orgex)) 
        }
    }

    const newTask = orgex[draggableId]
    const replace = orgex[destination.index]

    let newOrgexArray = []
    
    if(destination.index<source.index){
        for(var i=0; i<orgex.length; i++) {
            if(i === destination.index) {
                newOrgexArray.push({...newTask})
                newOrgexArray.push({...replace})
            } else if (i === source.index) {} 
            else {
                newOrgexArray.push({...orgex[i]})
            }
        }
    } else {
        for(var j=0; j<orgex.length; j++) {
            if(j === source.index) { }
            else if (j === destination.index) {
                newOrgexArray.push({...replace})
                newOrgexArray.push({...newTask})
            } else {
                newOrgexArray.push({...orgex[j]})
            }
        }
    }
    
    for(var k=0; k<newOrgexArray.length; k++) {
        newOrgexArray[k] = {...newOrgexArray[k], orgexId: k+1}
    }

    console.log(newOrgexArray)

    return (
        ( dispatch ) => {
            dispatch(rearrangeOrgexRequest())
            Axios.put(`${apiUrlAdmin}/rearrange-orgex`, {newOrgexArray})
            .then(() => {
                dispatch(fetchOrgexRequest())
                Axios.get(`${apiUrlAdmin}/get-orgex`)
                .then((res) => {
                    dispatch(fetchOrgexSuccess(res.data.resultSuccess))
                }).catch((err) => {
                    dispatch(fetchOrgexFailed(err.message))
                })
            }).catch((err) => {
                dispatch(rearrangeOrgexFailed(err.message))
            })
        }
    )
}

const addOrgexRequest = () => {
    return {
        type: ADD_ORGEX_REQUEST
    }
}

const addOrgexFailed = ( message ) => {
    return {
        type: ADD_ORGEX_FAILED,
        payload: message
    }
}

export const addOrgex = ( newOrgex ) => {
    return (
        ( dispatch ) => {
            dispatch(addOrgexRequest())
            Axios.post(`${apiUrlAdmin}/add-orgex`, newOrgex)
            .then(() => {
                dispatch(fetchOrgexRequest())
                Axios.get(`${apiUrlAdmin}/get-orgex`)
                .then((res) => {
                    if (res.data.error) {
                        toast.error("add data unsuccessful!", {
                            autoClose: 1500
                            });
                    } else {
                        toast.success("data successfully added!", {
                            autoClose: 1500
                            });
                        dispatch(closeAddOrgex())
                        dispatch(fetchOrgexSuccess(res.data.resultSuccess))
                    }
                }).catch((err) => {
                    dispatch(fetchOrgexFailed(err.message))
                })
            }).catch((err) => {
                dispatch(addOrgexFailed(err.message))
            })
        }
    )
}

const updateOrgexRequest = () => {
    return {
        type: UPDATE_ORGEX_REQUEST
    }
}

const updateOrgexFailed = ( message ) => {
    return {
        type: UPDATE_ORGEX_FAILED,
        payload: message
    }
}

export const updateOrgex = ( updatedOrgex ) => {
    return (
        ( dispatch ) => {
            dispatch(updateOrgexRequest())
            Axios.put(`${apiUrlAdmin}/update-orgex`, updatedOrgex)
            .then(() => {
                dispatch(fetchOrgexRequest())
                Axios.get(`${apiUrlAdmin}/get-orgex`)
                .then((res) => {
                    if (res.data.error) {
                        toast.error("update unsuccessful!", {
                            autoClose: 1500
                            });
                    } else {
                        toast.success("data successfully updated!", {
                            autoClose: 1500
                            });
                        dispatch(closeUpdateOrgex())
                        dispatch(fetchOrgexSuccess(res.data.resultSuccess))
                    }
                }).catch((err) => {
                    dispatch(fetchOrgexFailed(err.message))
                })
            }).catch((err) => {
                dispatch(updateOrgexFailed(err.message))
            })
        }
    )
}

const deleteOrgexRequest = () => {
    return {
        type: DELETE_ORGEX_REQUEST
    }
}

const deleteOrgexFailed = ( message ) => {
    return {
        type: DELETE_ORGEX_FAILED,
        payload: message
    }
}

export const deleteOrgex = ( id ) => {
    return (
        ( dispatch ) => {
            dispatch(deleteOrgexRequest())
            Axios.post(`${apiUrlAdmin}/delete-orgex`, {id})
            .then((res) => {
                    let result = res.data.result
                    let newOrgexArray = []

                    for (var i = 0; i< result.length; i++) {
                        newOrgexArray.push({
                            ...result[i],
                            orgexId : i+1,
                            description: JSON.parse(result[i].description)
                        })
                    }

                    if (res.data.error && res.data.message === "Data unavailable!") {
                        toast.warn("data successfully deleted!", {
                            autoClose: 1500
                            });
                        dispatch(closeDeleteOrgex())
                        dispatch(rearrangeOrgexRequest())
                        Axios.put(`${apiUrlAdmin}/rearrange-orgex`, {newOrgexArray})
                        .then(() => {
                            dispatch(fetchOrgexRequest())
                            Axios.get(`${apiUrlAdmin}/get-orgex`)
                            .then((res) => {
                                dispatch(fetchOrgexSuccess(res.data.resultSuccess))
                            }).catch((err) => {
                                dispatch(fetchOrgexFailed(err.message))
                            })
                        }).catch((err) => {
                            dispatch(rearrangeOrgexFailed(err.message))
                        })
                    } else if (res.data.error) {
                        toast.error("unsuccessful deletion!", {
                            autoClose: 1500
                            });
                    } else {
                        toast.warn("data successfully deleted!", {
                            autoClose: 1500
                            });
                        dispatch(closeDeleteOrgex())
                        dispatch(rearrangeOrgexRequest())
                        Axios.put(`${apiUrlAdmin}/rearrange-orgex`, {newOrgexArray})
                        .then(() => {
                            dispatch(fetchOrgexRequest())
                            Axios.get(`${apiUrlAdmin}/get-orgex`)
                            .then((res) => {
                                dispatch(fetchOrgexSuccess(res.data.resultSuccess))
                            }).catch((err) => {
                                dispatch(fetchOrgexFailed(err.message))
                            })
                        }).catch((err) => {
                            dispatch(rearrangeOrgexFailed(err.message))
                        })
                    }
            }).catch((err) => {
                dispatch(deleteOrgexFailed(err.message))
            })
        }
    )
}