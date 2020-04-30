import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchName,
    fetchOverview,
    updateName,
    updateOverview,
    fetchCs,
    postCs,
    deleteCs,
    fetchNcs,
    postNcs,
    deleteNcs,
    fetchEducation,
    rearrangeEducationArray,
    openAddEducation,
    openUpdateEducation,
    openDeleteEducation
} from '../../redux'

//
// import react-beautiful-dnd
import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd'

//
// import toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//
// config toast
toast.configure({
    draggable: false
});

function MyPage() {
    
    //
    // selector name and overview
    const name = useSelector( state => state.nameOverview.user )
    const overview = useSelector( state => state.nameOverview.overview )
    const compSkills = useSelector( state => state.skills.compSkills )
    const nonCompSkills = useSelector ( state => state.skills.nonCompSkills )
    const education = useSelector ( state => state.education.education_array )

    //
    // state name and overview
    const [userName, setUserName] = useState()
    const [userOverview, setUserOverview] = useState()

    //
    // dispatch action
    const dispatch = useDispatch()

    //
    // use effect
    useEffect(()=>{
        dispatch(fetchName())
        dispatch(fetchOverview())
        dispatch(fetchCs())
        dispatch(fetchNcs())
        dispatch(fetchEducation())
    }, [dispatch]);

    return (
        <div className="row">

            <div style={{marginTop:'3vh'}} className="container col s12 m4 l3"> 
                <div className="collection">
                    <a href="#!" className="collection-item">Name and Overview</a>
                    <a href="#!" className="collection-item">Skills</a>
                    <a href="#!" className="collection-item">Education</a>
                    <a href="#!" className="collection-item">Work and Achievement</a>
                    <a href="#!" className="collection-item">Organizational</a>
                </div>
            </div>

            <div className="col s12 m8 l9">

                {/* name and overview starts */}
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4 className="left">Name and Overview</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table >
                                    <tbody>
                                        <tr className="highlight responsive-table center">
                                            <td>Full Name</td>
                                            <td>
                                                <div className="input-field col s10">
                                                    <table>
                                                        <tbody>
                                                            <tr className="no-border">
                                                                <td><input value={userName||name} onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder="Full Name" /></td>
                                                                <td><a href="#!" onClick={()=>dispatch(updateName(userName||name))} className="waves-effect waves-light btn">Save Change</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>Overview</td>
                                            <td>
                                                <div className="input-field col s12">
                                                    <textarea value={userOverview||overview} onChange={(e)=>setUserOverview(e.target.value)} placeholder="My Overview" className="materialize-textarea"></textarea>
                                                    <label htmlFor="textarea1">{userName||name}'s Overview</label>
                                                </div>
                                            </td>
                                            <td><a href="#!" onClick={()=>dispatch(updateOverview(userOverview||overview))} className="waves-effect waves-light btn">Save Change</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* name and overview ends */}

                {/* skills starts */}
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4 className="left">Skills</h4>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <h5 className="left">Computational</h5>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <div className="no-border chips">
                                    {
                                        compSkills.map((val,index) => (
                                            <div key={index} className="chip">
                                                {val.skills}
                                                <a href="#!" onClick={() => dispatch(deleteCs(val.id))}>
                                                    <i style={{marginLeft: '2vh'}} className="fas fa-times" />
                                                </a>
                                            </div>
                                        ))
                                    }
                                    <input 
                                        onKeyPress={
                                            (e) => {
                                                if (e.key === 'Enter') {
                                                    dispatch(postCs(e.target.value))
                                                    e.target.value = ''
                                                }
                                            }
                                        }
                                        type="text" 
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <h5 className="left">Non-Computational</h5>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <div className="no-border chips">
                                    {
                                        nonCompSkills.map((val,index) => (
                                            <div key={index} className="chip">
                                                {val.skills}
                                                <a href="#!" onClick={() => dispatch(deleteNcs(val.id))}>
                                                    <i style={{marginLeft: '2vh'}} className="fas fa-times" />
                                                </a>
                                            </div>
                                        ))
                                    }
                                    <input
                                        onKeyPress={
                                            (e) => {
                                                if (e.key === 'Enter') {
                                                    dispatch(postNcs(e.target.value))
                                                    e.target.value = ''
                                                }
                                            }
                                        }
                                        type="text" 
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* skills ends */}

                {/* education starts */}
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4 className="left">Education</h4>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <DragDropContext
                                    onDragEnd={
                                        (result) => {dispatch(rearrangeEducationArray(result,education))}
                                    }
                                >
                                    <table className="highlight">
                                        <thead>
                                            <tr>
                                                <td>Num.</td>
                                                <td>Starts</td>
                                                <td>Finish</td>
                                                <td>Institution</td>
                                                <td>Grade</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                            <Droppable
                                                droppableId="education"
                                                key="education_droppable"
                                            >
                                                {
                                                    ( provided )  => (
                                                        <tbody
                                                            ref = {provided.innerRef}
                                                            {...provided.droppableProps}
                                                        >
                                                            {   
                                                                <>
                                                                    {education.map((val, index) => {
                                                                        return(
                                                                            <Draggable
                                                                                draggableId={index.toString()}
                                                                                index={index}
                                                                                key={index}
                                                                            >
                                                                                {
                                                                                    ( drag_provided ) => (
                                                                                        <tr
                                                                                            key={val.id}
                                                                                            {...drag_provided.draggableProps}
                                                                                            {...drag_provided.dragHandleProps}
                                                                                            ref={drag_provided.innerRef}
                                                                                            className="on-drag"
                                                                                        >
                                                                                            <td>{index+1}</td>
                                                                                            <td>{val.starts}</td>
                                                                                            <td>{val.finish}</td>
                                                                                            <td>{val.institution}</td>
                                                                                            <td>{val.grade}</td>
                                                                                            <td>
                                                                                                <a href="#!" onClick={() => dispatch(openUpdateEducation(index))} className="button-margin waves-effect waves-light btn">Edit</a>
                                                                                                <a href="#!" onClick={() => dispatch(openDeleteEducation(index))} className="waves-effect waves-light btn">Delete</a>
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                                }
                                                                            </Draggable>
                                                                        )
                                                                    })}
                                                                    {provided.placeholder}
                                                                </>
                                                            }
                                                        </tbody>
                                                    )
                                                }
                                            </Droppable>
                                    </table>
                                </DragDropContext>
                                <div className="center mt-3">
                                    <a onClick={()=>dispatch(openAddEducation())} href="#!" className="waves-effect waves-light btn">Add</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* education ends */}

                {/* achievement and organization starts */}
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4 className="left">Achievement and Organization</h4>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <table className="highlight">
                                    <thead>
                                        <tr>
                                            <td>Num.</td>
                                            <td>Title</td>
                                            <td>Institution</td>
                                            <td>Time</td>
                                            <td>Option</td>
                                            <td>Description</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Coding Student</td>
                                            <td>Purwadhika</td>
                                            <td>2019 - now</td>
                                            <td>Skills Included</td>
                                            <td>
                                                <table className="highlight">
                                                    <tbody>
                                                        <tr className="no-border">
                                                            <td>
                                                                ReactJS
                                                            </td>
                                                        </tr>
                                                        <tr className="no-border">
                                                            <td>
                                                                HTML
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>
                                                <a href="#!" className="button-margin waves-effect waves-light btn">Edit</a>
                                                <a href="#!" className="waves-effect waves-light btn">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="center mt-3">
                                    <a href="#!" className="waves-effect waves-light btn">Add</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* achievement and organization ends */}

                {/* organizational exp starts */}
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4 className="left">Organizational Experiences</h4>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <table className="highlight">
                                    <thead>
                                        <tr>
                                            <td>Num.</td>
                                            <td>Title</td>
                                            <td>Institution</td>
                                            <td>Time</td>
                                            <td>Option</td>
                                            <td>Description</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Staff of Pemuda Peduli Social Organization</td>
                                            <td>Pemuda Peduli</td>
                                            <td>2018 - 2019</td>
                                            <td>Key Responsibilities Included</td>
                                            <td>
                                                <table className="highlight">
                                                    <tbody>
                                                        <tr className="no-border">
                                                            <td>
                                                                Research
                                                            </td>
                                                        </tr>
                                                        <tr className="no-border">
                                                            <td>
                                                                Logistics
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>
                                                <a href="#!" className="button-margin waves-effect waves-light btn">Edit</a>
                                                <a href="#!" className="waves-effect waves-light btn">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="center mt-3">
                                    <a href="#!" className="waves-effect waves-light btn">Add</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* organizational exp ends */}
            </div>
        </div>
    )
}

export default MyPage