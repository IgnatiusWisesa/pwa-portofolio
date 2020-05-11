import {
    FETCH_WORKACH_REQUEST,
    FETCH_WORKACH_SUCCESS,
    FETCH_WORKACH_FAILED,
    REARRANGE_WORKACH_ARRAY_REQUEST,
    REARRANGE_WORKACH_ARRAY_FAILED,
    ADD_WORKACH_REQUEST,
    ADD_WORKACH_FAILED,
    UPDATE_WORKACH_REQUEST,
    UPDATE_WORKACH_FAILED,
    DELETE_WORKACH_REQUEST,
    DELETE_WORKACH_FAILED,
} from './workachTypes'
import Axios from 'axios'
import { apiUrlAdmin } from '../../helper/URL'
import { toast } from 'react-toastify';
import { closeAddWorkach, closeUpdateWorkach, closeDeleteWorkach } from '../modals/modalsActions';

const fetchWorkachRequest = () => {
    return {
        type: FETCH_WORKACH_REQUEST
    }
}

const fetchWorkachSuccess = ( workach_array ) => {
    return {
        type: FETCH_WORKACH_SUCCESS,
        payload: workach_array
    }
}

const fetchWorkachFailed = ( message ) => {
    return {
        type: FETCH_WORKACH_FAILED,
        payload: message
    }
}

export const fetchWorkach = () => {
    return (
        ( dispatch ) => {
            dispatch(fetchWorkachRequest())
            Axios.get(`${apiUrlAdmin}/get-workach`)
            .then((res) => {
                dispatch(fetchWorkachSuccess(res.data.resultSuccess))
            }).catch((err) => {
                dispatch(fetchWorkachFailed(err.message))
            })
        }
    )
}

const rearrangeWorkachArrayRequest = () => {
    return {
        type: REARRANGE_WORKACH_ARRAY_REQUEST
    }
}

const rearrangeWorkachArrayFailed = ( message ) => {
    return {
        type: REARRANGE_WORKACH_ARRAY_FAILED,
        payload: message
    }
}

export const rearrangeWorkachArray = ( result, workach ) => {
    const { destination, source, draggableId } = result

    if (!destination) { 
        return( dispacth ) => {
            dispacth(fetchWorkachSuccess(workach)) 
        }
    }
    if (destination.droppableId !== source.droppableId) {
        return( dispacth ) => {
            dispacth(fetchWorkachSuccess(workach)) 
        }
    }
    if (destination.index === source.index) {
        return( dispacth ) => {
            dispacth(fetchWorkachSuccess(workach)) 
        }
    }
    if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return( dispacth ) => {
            dispacth(fetchWorkachSuccess(workach)) 
        }
    }

    const newTask = workach[draggableId]
    const replace = workach[destination.index]

    let newWorkachArray = []
    
    if(destination.index<source.index){
        for(var i=0; i<workach.length; i++) {
            if(i === destination.index) {
                newWorkachArray.push({...newTask})
                newWorkachArray.push({...replace})
            } else if (i === source.index) {} 
            else {
                newWorkachArray.push({...workach[i]})
            }
        }
    } else {
        for(var j=0; j<workach.length; j++) {
            if(j === source.index) { }
            else if (j === destination.index) {
                newWorkachArray.push({...replace})
                newWorkachArray.push({...newTask})
            } else {
                newWorkachArray.push({...workach[j]})
            }
        }
    }
    
    for(var k=0; k<newWorkachArray.length; k++) {
        newWorkachArray[k] = {...newWorkachArray[k], workachId: k+1}
    }

    return (
        ( dispatch ) => {
            dispatch(rearrangeWorkachArrayRequest())
            Axios.put(`${apiUrlAdmin}/rearrange-workach`, {newWorkachArray})
            .then(() => {
                dispatch(fetchWorkachRequest())
                Axios.get(`${apiUrlAdmin}/get-workach`)
                .then((res) => {
                    dispatch(fetchWorkachSuccess(res.data.resultSuccess))
                }).catch((err) => {
                    dispatch(fetchWorkachFailed(err.message))
                })
            }).catch((err) => {
                dispatch(rearrangeWorkachArrayFailed(err.message))
            })
        }
    )
}

const addWorkachRequest = () => {
    return {
        type: ADD_WORKACH_REQUEST
    }
}

const addWorkachFailed = ( message ) => {
    return {
        type: ADD_WORKACH_FAILED,
        payload: message
    }
}

export const addWorkach = ( newWorkach ) => {
    return (
        ( dispatch ) => {
            dispatch(addWorkachRequest())
            Axios.post(`${apiUrlAdmin}/add-workach`, newWorkach)
            .then(() => {
                dispatch(fetchWorkachRequest())
                Axios.get(`${apiUrlAdmin}/get-workach`)
                .then((res) => {
                    if (res.data.error) {
                        toast.error("add data unsuccessful!", {
                            autoClose: 1500
                            });
                    } else {
                        toast.success("data successfully added!", {
                            autoClose: 1500
                            });
                        dispatch(closeAddWorkach())
                        dispatch(fetchWorkachSuccess(res.data.resultSuccess))
                    }
                }).catch((err) => {
                    dispatch(fetchWorkachFailed(err.message))
                })
            }).catch((err) => {
                dispatch(addWorkachFailed(err.message))
            })
        }
    )
}

const updateWorkachRequest = () => {
    return {
        type: UPDATE_WORKACH_REQUEST
    }
}

const updateWorkachFailed = ( message ) => {
    return {
        type: UPDATE_WORKACH_FAILED,
        payload: message
    }
}

export const updateWorkach = ( updatedWorkach ) => {
    return (
        ( dispatch ) => {
            dispatch(updateWorkachRequest())
            Axios.put(`${apiUrlAdmin}/update-workach`, updatedWorkach)
            .then(() => {
                dispatch(fetchWorkachRequest())
                Axios.get(`${apiUrlAdmin}/get-workach`)
                .then((res) => {
                    if (res.data.error) {
                        toast.error("update unsuccessful!", {
                            autoClose: 1500
                            });
                    } else {
                        toast.success("data successfully updated!", {
                            autoClose: 1500
                            });
                        dispatch(closeUpdateWorkach())
                        dispatch(fetchWorkachSuccess(res.data.resultSuccess))
                    }
                }).catch((err) => {
                    dispatch(fetchWorkachFailed(err.message))
                })
            }).catch((err) => {
                dispatch(updateWorkachFailed(err.message))
            })
        }
    )
}

const deleteWorkachRequest = () => {
    return {
        type: DELETE_WORKACH_REQUEST
    }
}

const deleteWorkachFailed = ( message ) => {
    return {
        type: DELETE_WORKACH_FAILED,
        payload: message
    }
}

export const deleteWorkach = ( id ) => {
    return (
        ( dispacth ) => {
            dispacth(deleteWorkachRequest())
            Axios.post(`${apiUrlAdmin}/delete-workach`, {id})
            .then((res) => {
                    let result = res.data.result
                    let newWorkachArray = []

                    for (var i = 0; i< result.length; i++) {
                        newWorkachArray.push({
                            ...result[i],
                            workachId : i+1,
                            description: JSON.parse(result[i].description)
                        })
                    }

                    if (res.data.error && res.data.message === "Data unavailable!") {
                        toast.warn("data successfully deleted!", {
                            autoClose: 1500
                            });
                        dispacth(closeDeleteWorkach())
                        dispacth(rearrangeWorkachArrayRequest())
                        Axios.put(`${apiUrlAdmin}/rearrange-workach`, {newWorkachArray})
                        .then(() => {
                            dispacth(fetchWorkachRequest())
                            Axios.get(`${apiUrlAdmin}/get-workach`)
                            .then((res) => {
                                dispacth(fetchWorkachSuccess(res.data.resultSuccess))
                            }).catch((err) => {
                                dispacth(fetchWorkachFailed(err.message))
                            })
                        }).catch((err) => {
                            dispacth(rearrangeWorkachArrayFailed(err.message))
                        })
                    } else if (res.data.error) {
                        toast.error("unsuccessful deletion!", {
                            autoClose: 1500
                            });
                    } else {
                        toast.warn("data successfully deleted!", {
                            autoClose: 1500
                            });
                        dispacth(closeDeleteWorkach())
                        dispacth(rearrangeWorkachArrayRequest())
                        Axios.put(`${apiUrlAdmin}/rearrange-workach`, {newWorkachArray})
                        .then(() => {
                            dispacth(fetchWorkachRequest())
                            Axios.get(`${apiUrlAdmin}/get-workach`)
                            .then((res) => {
                                dispacth(fetchWorkachSuccess(res.data.resultSuccess))
                            }).catch((err) => {
                                dispacth(fetchWorkachFailed(err.message))
                            })
                        }).catch((err) => {
                            dispacth(rearrangeWorkachArrayFailed(err.message))
                        })
                    }
            }).catch((err) => {
                dispacth(deleteWorkachFailed(err.message))
            })
        }
    )
}