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
    openDeleteEducation,
    openAddWorkach,
    fetchWorkach,
    rearrangeWorkachArray,
    clickUpdateWorkach,
    openDeleteWorkach,
    fetchOrgex,
    rearrangeOrgexArray,
    openAddOrgex,
    clickUpdateOrgex,
    openDeleteOrgex
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
    // selector
    const name = useSelector( state => state.nameOverview.user )
    const overview = useSelector( state => state.nameOverview.overview )
    const compSkills = useSelector( state => state.skills.compSkills )
    const nonCompSkills = useSelector ( state => state.skills.nonCompSkills )
    const education = useSelector ( state => state.education.education_array )
    const workach = useSelector( state => state.workach.workach_array )
    const orgex = useSelector( state => state.orgex.orgex_array )

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
        dispatch(fetchWorkach())
        dispatch(fetchOrgex())
    }, [dispatch]);

    return (
        <div className="row">
            
            <div className="col s12 m4 l3" style={{marginTop:'3vh' ,position:'fixed'}}>
                <div className="collection">
                    <a 
                        href="#nameOverview"
                        className="collection-item"
                    >
                        Name and Overview
                    </a>
                    <a 
                        href="#skills"
                        className="collection-item"
                    >
                        Skills
                    </a>
                    <a 
                        href="#education"
                        className="collection-item"
                    >
                        Education
                    </a>
                    <a 
                        href="#workach"
                        className="collection-item"
                    >
                        Work and Achievement</a>
                    <a 
                        href="#orgex"
                        className="collection-item"
                    >
                        Organizational
                    </a>
                </div>
            </div>

            <div style={{marginLeft:'53vh'}}>

                {/* name and overview starts */}
                <table id="nameOverview">
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
                <table id="skills">
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
                <table id="education">
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
                                        (result) => {
                                            dispatch(rearrangeEducationArray(result,education))
                                        }
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
                                                            {   education?
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
                                                                                            key={index}
                                                                                            {...drag_provided.draggableProps}
                                                                                            {...drag_provided.dragHandleProps}
                                                                                            ref={drag_provided.innerRef}
                                                                                            className="on-drag"
                                                                                        >
                                                                                            <td>{val.educationId}</td>
                                                                                            <td>{val.starts}</td>
                                                                                            <td>{val.finish}</td>
                                                                                            <td>{val.institution}</td>
                                                                                            <td>{val.grade}</td>
                                                                                            <td>
                                                                                                <a href="#!" onClick={() => dispatch(openUpdateEducation(index))} className="button-margin waves-effect waves-light btn">Edit</a>
                                                                                                <a href="#!" onClick={() => dispatch(openDeleteEducation(val.educationId))} className="waves-effect waves-light btn">Delete</a>
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                                }
                                                                            </Draggable>
                                                                        )
                                                                    })}
                                                                    {provided.placeholder}
                                                                </>
                                                                :
                                                                <>
                                                                    <tr className="no-border">
                                                                        <td className="center">
                                                                            There is no data available yet
                                                                        </td>
                                                                    </tr>
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

                {/* work and achievement starts */}
                <table id="workach">
                    <tbody>
                        <tr>
                            <td>
                                <h4 className="left">Work and Achievement</h4>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <DragDropContext
                                    onDragEnd={
                                        (result) => {
                                            dispatch(rearrangeWorkachArray(result,workach))
                                        }
                                    }
                                >
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
                                        <Droppable
                                            droppableId="workach"
                                            key="workach_droppable"
                                        >
                                            {
                                                ( provided ) => (
                                                    <tbody
                                                        ref = {provided.innerRef}
                                                        {...provided.droppableProps}
                                                    >
                                                        {
                                                            workach?
                                                            <>
                                                                {
                                                                    workach.map((val,index) => {
                                                                        return (
                                                                            <Draggable
                                                                                draggableId={index.toString()}
                                                                                index={index}
                                                                                key={index}
                                                                            >
                                                                                {
                                                                                    ( drag_provided ) => (
                                                                                        <tr
                                                                                            key={index}
                                                                                            {...drag_provided.draggableProps}
                                                                                            {...drag_provided.dragHandleProps}
                                                                                            ref={drag_provided.innerRef}
                                                                                            className="on-drag"
                                                                                        >
                                                                                            <td>{val.workachId}</td>
                                                                                            <td>{val.title}</td>
                                                                                            <td>{val.institution}</td>
                                                                                            <td>{val.time}</td>
                                                                                            <td>{val.opt}</td>
                                                                                            <td>
                                                                                                <table className="highlight">
                                                                                                    <tbody>
                                                                                                        {
                                                                                                            workach[index].description?
                                                                                                                workach[index].description.map((val,index) => {
                                                                                                                    return (
                                                                                                                        <tr
                                                                                                                            key={index}
                                                                                                                            className="no-border"
                                                                                                                        >
                                                                                                                            <td>
                                                                                                                                {val}
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    )
                                                                                                                })
                                                                                                            :
                                                                                                            <tr className="no-border">
                                                                                                                <td>
                                                                                                                    -
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        }
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                            <td>
                                                                                                <a 
                                                                                                    href="#!" 
                                                                                                    onClick={() => dispatch(clickUpdateWorkach(val.id))} 
                                                                                                    className="button-margin waves-effect waves-light btn"
                                                                                                >
                                                                                                    Edit
                                                                                                </a>
                                                                                                <a 
                                                                                                    href="#!" 
                                                                                                    onClick={() => dispatch(openDeleteWorkach(val.workachId))} 
                                                                                                    className="waves-effect waves-light btn"
                                                                                                >
                                                                                                    Delete
                                                                                                </a>
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                                }
                                                                            </Draggable>
                                                                        )
                                                                    })
                                                                }
                                                                {provided.placeholder}
                                                            </>
                                                            :
                                                            <>
                                                                <tr className="no-border">
                                                                    <td className="center">
                                                                        There is no data available yet
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        }
                                                    </tbody>
                                                )
                                            }
                                        </Droppable>
                                    </table>
                                    <div className="center mt-3">
                                        <a onClick={() => dispatch(openAddWorkach())} href="#!" className="waves-effect waves-light btn">Add</a>
                                    </div>
                                </DragDropContext>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* work and achievement ends */}

                {/* organizational exp starts */}
                <table id="orgex">
                    <tbody>
                        <tr>
                            <td>
                                <h4 className="left">Organizational Experiences</h4>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <DragDropContext
                                    onDragEnd={
                                        (result) => {
                                            dispatch(rearrangeOrgexArray(result,orgex))
                                        }
                                    }
                                >
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
                                        <Droppable
                                            droppableId="orgex"
                                            key="orgex_droppable"
                                        >
                                            {
                                                ( provided ) => (
                                                    <tbody
                                                        ref = {provided.innerRef}
                                                        {...provided.droppableProps}
                                                    >
                                                        {
                                                            orgex?
                                                                <>
                                                                    {
                                                                        orgex.map((val,index) => {
                                                                            return (
                                                                                <Draggable
                                                                                    draggableId={index.toString()}
                                                                                    index={index}
                                                                                    key={index}
                                                                                >
                                                                                    {
                                                                                        ( drag_provided ) => (
                                                                                            <tr 
                                                                                                key={index}
                                                                                                {...drag_provided.draggableProps}
                                                                                                {...drag_provided.dragHandleProps}
                                                                                                ref={drag_provided.innerRef}
                                                                                                className="on-drag"
                                                                                            >
                                                                                                <td>{val.orgexId}</td>
                                                                                                <td>{val.title}</td>
                                                                                                <td>{val.institution}</td>
                                                                                                <td>{val.time}</td>
                                                                                                <td>{val.opt}</td>
                                                                                                <td>
                                                                                                    <table className="highlight">
                                                                                                        <tbody>
                                                                                                            {
                                                                                                                orgex[index].description?
                                                                                                                    orgex[index].description.map((val,index) => {
                                                                                                                        return(
                                                                                                                            <tr key={index} className="no-border">
                                                                                                                                <td>
                                                                                                                                    {val}
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        )
                                                                                                                    })
                                                                                                                :
                                                                                                                    <tr className="no-border">
                                                                                                                        <td>
                                                                                                                            -
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                            }
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <a 
                                                                                                        onClick={() => {dispatch(clickUpdateOrgex(val.id))}}
                                                                                                        href="#!" 
                                                                                                        className="button-margin waves-effect waves-light btn"
                                                                                                    >
                                                                                                        Edit
                                                                                                    </a>
                                                                                                    <a 
                                                                                                        onClick={() => {dispatch(openDeleteOrgex(val.orgexId))}}
                                                                                                        href="#!" 
                                                                                                        className="waves-effect waves-light btn"
                                                                                                    >
                                                                                                        Delete
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        )
                                                                                    }
                                                                                </Draggable>
                                                                            )
                                                                        })
                                                                    }
                                                                    {provided.placeholder}
                                                                </>
                                                            :
                                                            <>
                                                                <tr className="no-border">
                                                                    <td className="center">
                                                                        There is no data available yet
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        }
                                                    </tbody>

                                                )
                                            }
                                        </Droppable>
                                    </table>
                                    <div className="center mt-3">
                                        <a 
                                            onClick={() => {dispatch(openAddOrgex())}}
                                            href="#!" 
                                            className="waves-effect waves-light btn"
                                        >
                                            Add
                                        </a>
                                    </div>
                                </DragDropContext>
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