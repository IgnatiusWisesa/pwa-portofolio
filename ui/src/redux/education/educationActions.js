import {
    FETCH_EDUCATION_REQUEST,
    FETCH_EDUCATION_SUCCESS,
    FETCH_EDUCATION_FAILED,
    REARRANGE_EDUCATION_ARRAY_REQUEST,
    REARRANGE_EDUCATION_ARRAY_FAILED,
    ADD_EDUCATION_REQUEST,
    ADD_EDUCATION_FAILED,
    UPDATE_EDUCATION_REQUEST,
    UPDATE_EDUCATION_FAILED,
    DELETE_EDUCATION_REQUEST,
    DELETE_EDUCATION_FAILED
} from './educationTypes'
import {
    closeAddEducation,
    closeUpdateEducation,
    closeDeleteEducation
} from './../index'
import Axios from 'axios'
import { apiUrlAdmin } from '../../helper/URL'
import { toast } from 'react-toastify';

const fetchEducationRequest = () => {
    return {
        type: FETCH_EDUCATION_REQUEST
    }
}

const fetchEducationSuccess = ( education_array ) => {
    return {
        type: FETCH_EDUCATION_SUCCESS,
        payload: education_array
    }
}

const fetchEducationFailed = ( message ) => {
    return {
        type: FETCH_EDUCATION_FAILED,
        payload: message
    }
}

export const fetchEducation = () => {
    return(
        ( dispacth ) => {
            dispacth(fetchEducationRequest())
            Axios.get(`${apiUrlAdmin}/get-education`)
            .then((res) => {
                dispacth(fetchEducationSuccess(res.data.result))
            }).catch((err) => {
                dispacth(fetchEducationFailed(err.message))
            })
        }
    )
}

const rearrangeEducationArrayRequest = () => {
    return {
        type: REARRANGE_EDUCATION_ARRAY_REQUEST
    }
}

const rearrangeEducationArrayFailed = ( message ) => {
    return {
        type: REARRANGE_EDUCATION_ARRAY_FAILED,
        payload: message
    }
}

export const rearrangeEducationArray = ( result, education ) => {
    const { destination, source, draggableId } = result

    if (!destination) { 
        return( dispacth ) => {
            dispacth(fetchEducationSuccess(education)) 
        }
    }
    if (destination.droppableId !== source.droppableId) {
        return( dispacth ) => {
            dispacth(fetchEducationSuccess(education)) 
        }
    }
    if (destination.index === source.index) {
        return( dispacth ) => {
            dispacth(fetchEducationSuccess(education)) 
        }
    }
    if(
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return( dispacth ) => {
            dispacth(fetchEducationSuccess(education)) 
        }
    }

    const newTask = education[draggableId]
    const replace = education[destination.index]

    let newEducationArray = []
    
    if(destination.index<source.index){
        for(var i=0; i<education.length; i++) {
            if(i === destination.index) {
                newEducationArray.push({...newTask})
                newEducationArray.push({...replace})
            } else if (i === source.index) {} 
            else {
                newEducationArray.push({...education[i]})
            }
        }
    } else {
        for(var j=0; j<education.length; j++) {
            if(j === source.index) { }
            else if (j === destination.index) {
                newEducationArray.push({...replace})
                newEducationArray.push({...newTask})
            } else {
                newEducationArray.push({...education[j]})
            }
        }
    }
    
    for(var k=0; k<newEducationArray.length; k++) {
        newEducationArray[k] = {...newEducationArray[k], educationId: k+1}
    }

    return (
        ( dispacth ) => {
            dispacth(rearrangeEducationArrayRequest())
            Axios.put(`${apiUrlAdmin}/rearrange-education`, {newEducationArray})
            .then(() => {
                dispacth(fetchEducationRequest())
                Axios.get(`${apiUrlAdmin}/get-education`)
                .then((res) => {
                    dispacth(fetchEducationSuccess(res.data.result))
                }).catch((err) => {
                    dispacth(fetchEducationFailed(err.message))
                })
            }).catch((err) => {
                dispacth(rearrangeEducationArrayFailed(err.message))
            })
        }
    )
}

const addEducationRequest = () => {
    return {
        type: ADD_EDUCATION_REQUEST
    }
}

const addEducationFailed = ( message ) => {
    return {
        type: ADD_EDUCATION_FAILED,
        payload: message
    }
}

export const addEducation = ( newEducation ) => {
    return (
        ( dispacth ) => {
            dispacth(addEducationRequest())
            Axios.post(`${apiUrlAdmin}/add-education`, newEducation)
            .then(() => {
                dispacth(fetchEducationRequest())
                Axios.get(`${apiUrlAdmin}/get-education`)
                .then((res) => {
                    if (res.data.error) {
                        toast.error("add data unsuccessful!", {
                            autoClose: 1500
                            });
                    } else {
                        toast.success("data successfully added!", {
                            autoClose: 1500
                            });
                        dispacth(closeAddEducation())
                        dispacth(fetchEducationSuccess(res.data.result))
                    }
                }).catch((err) => {
                    dispacth(fetchEducationFailed(err.message))
                })
            }).catch((err) => {
                dispacth(addEducationFailed(err.message))
            })
        }
    )
}

const updateEducationRequest = () => {
    return {
        type: UPDATE_EDUCATION_REQUEST
    }
}

const updateEducationFailed = ( message ) => {
    return {
        type: UPDATE_EDUCATION_FAILED,
        payload: message
    }
}

export const updateEducation = ( updatedEducation ) => {
    return(
        ( dispacth ) => {
            dispacth(updateEducationRequest())
            Axios.put(`${apiUrlAdmin}/update-education`, {updatedEducation})
            .then(() => {
                dispacth(fetchEducationRequest())
                Axios.get(`${apiUrlAdmin}/get-education`)
                .then((res) => {
                    if (res.data.error) {
                        toast.error("update unsuccessful!", {
                            autoClose: 1500
                            });
                    } else {
                        toast.success("data successfully updated!", {
                            autoClose: 1500
                            });
                        dispacth(fetchEducationSuccess(res.data.result))
                        dispacth(closeUpdateEducation())
                    }
                }).catch((err) => {
                    dispacth(fetchEducationFailed(err.message))
                })
            }).catch((err) => {
                dispacth(updateEducationFailed(err.message))
            })
        }
    )
}

const deleteEducationRequest = () => {
    return {
        type: DELETE_EDUCATION_REQUEST
    }
}

const deleteEducationFailed = ( message ) => {
    return {
        type: DELETE_EDUCATION_FAILED,
        payload: message
    }
}

export const deleteEducation = ( id ) => {
    return (
        ( dispacth ) => {
            dispacth(deleteEducationRequest())
            Axios.post(`${apiUrlAdmin}/delete-education`, {id})
            .then((res) => {
                    let result = res.data.result
                    let newEducationArray = []

                    for (var i = 0; i< result.length; i++) {
                        newEducationArray.push({
                            ...result[i],
                            educationId : i+1
                        })
                    }

                    if (res.data.error && res.data.message === "Data unavailable!") {
                        toast.warn("data successfully deleted!", {
                            autoClose: 1500
                            });
                        dispacth(closeDeleteEducation())
                        dispacth(rearrangeEducationArrayRequest())
                        Axios.put(`${apiUrlAdmin}/rearrange-education`, {newEducationArray})
                        .then(() => {
                            dispacth(fetchEducationRequest())
                            Axios.get(`${apiUrlAdmin}/get-education`)
                            .then((res) => {
                                dispacth(fetchEducationSuccess(res.data.result))
                            }).catch((err) => {
                                dispacth(fetchEducationFailed(err.message))
                            })
                        }).catch((err) => {
                            dispacth(rearrangeEducationArrayFailed(err.message))
                        })
                    } else if (res.data.error) {
                        toast.error("unsuccessful deletion!", {
                            autoClose: 1500
                            });
                    } else {
                        toast.warn("data successfully deleted!", {
                            autoClose: 1500
                            });
                        dispacth(closeDeleteEducation())
                        dispacth(rearrangeEducationArrayRequest())
                        Axios.put(`${apiUrlAdmin}/rearrange-education`, {newEducationArray})
                        .then(() => {
                            dispacth(fetchEducationRequest())
                            Axios.get(`${apiUrlAdmin}/get-education`)
                            .then((res) => {
                                dispacth(fetchEducationSuccess(res.data.result))
                            }).catch((err) => {
                                dispacth(fetchEducationFailed(err.message))
                            })
                        }).catch((err) => {
                            dispacth(rearrangeEducationArrayFailed(err.message))
                        })
                    }
            }).catch((err) => {
                dispacth(deleteEducationFailed(err.message))
            })
        }
    )
}