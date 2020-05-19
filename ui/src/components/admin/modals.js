import React, { useState, useEffect } from 'react'
import './modals.css'
import { useSelector, useDispatch } from 'react-redux'
import {
    closeAddEducation,
    addEducation,
    closeUpdateEducation,
    updateEducation,
    deleteEducation,
    closeDeleteEducation,
    closeAddWorkach,
    selectOptionsWorkach,
    addOptionsWorkach,
    deleteOptionsWorkach,
    addWorkach,
    closeUpdateWorkach,
    updateDescriptionWorkach,
    addUpdateDescriptionWorkach,
    deleteUpdateDescriptionWorkach,
    updateWorkach,
    closeDeleteWorkach,
    deleteWorkach,
    closeAddOrgex,
    addOptionsOrgex,
    deleteOptionsOrgex,
    selectOptionsOrgex,
    addOrgex,
    closeUpdateOrgex,
    addUpdateDescriptionOrgex,
    updateDescriptionOrgex,
    deleteUpdateDescriptionOrgex,
    updateOrgex,
    closeDeleteOrgex,
    deleteOrgex
} from '../../redux'

//
// import toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//
// config toast
toast.configure({
    draggable: false
});

function Modals() {
    //
    // selector
    const modals = useSelector( state => state.modals )
    const education = useSelector( state => state.education.education_array )
    const workach = useSelector( state => state.workach.workach_array )
    const workach_update_array = useSelector( state => state.modals.workach_update_array )
    const workach_update_description = useSelector( state => state.modals.workach_update_description )
    const orgex = useSelector( state => state.orgex.orgex_array )
    const orgex_update_array = useSelector( state => state.modals.orgex_update_array )
    const orgex_update_description = useSelector( state => state.modals.orgex_update_description )
    const {
        add_education,
        update_education,
        update_education_id,
        delete_education,
        delete_education_id,
        add_workach,
        select_options_workach,
        array_options_workach,
        update_workach,
        delete_workach,
        delete_workach_id,
        add_orgex,
        select_options_orgex,
        array_options_orgex,
        update_orgex,
        delete_orgex,
        delete_orgex_id
    } = modals

    //
    // dispatch
    const dispatch = useDispatch()

    //
    // state
    
    // education state
    // modal state
    const [isAddEducationOpen = add_education] = useState()
    let showAddEducation = isAddEducationOpen? 'show-modal' : 'hidden-modal'
    const [isUpdateEducationOpen = update_education] = useState()
    let showUpdateEducation = isUpdateEducationOpen? 'show-modal' : 'hidden-modal'
    const [isDeleteEducationOpen = delete_education] = useState()
    let showDeleteEducation = isDeleteEducationOpen? 'show-modal' : 'hidden-modal'
    // add state
    const [addStartsNe, setAddStartsNe] = useState()
    const [addFinishNe, setAddFinishNe] = useState()
    const [addInstitutionNe, setAddInstitutionNe] = useState()
    const [addGradeNe, setAddGradeNe] = useState()
    // update state
    const [updateStarts, setUpdateStarts] = useState()
    const [updateFinish, setUpdateFinish] = useState()
    const [updateInstitution, setUpdateInstitution] = useState()
    const [updateGrade, setUpdateGrade] = useState()
    // delete state
    const delete_education_obj = education.filter((val) => delete_education_id === val.educationId)[0]

    // work-ach state
    // modal state
    const [isAddWorkachOpen = add_workach] = useState()
    let showAddWorkach = isAddWorkachOpen? 'show-modal' : 'hidden-modal'
    const [isUpdateWorkachOpen = update_workach] = useState()
    let showUpdateWorkach = isUpdateWorkachOpen? 'show-modal' : 'hidden-modal'
    const [isDeleteWorkachOpen = delete_workach] = useState()
    let showDeleteWorkach = isDeleteWorkachOpen? 'show-modal' : 'hidden-modal'
    // add state
    const [addTitleNw, setAddTitleNw] = useState()
    const [addInstitutionNw, setAddInstitutionNw] = useState()
    const [addTimeNw, setAddTimeNw] = useState()
    const [addOptionsNw, setAddOptionsNw] = useState()
    const [addFillOptionsNw, setAddFillOptionsNw] = useState([])
    // update state
    const [updateTitleW, setUpdateTitleW] = useState()
    const [updateInstitutionW, setUpdateInstitutionW] = useState()
    const [updateTimeW, setUpdateTimeW] = useState()
    const [updateOptionsW, setUpdateOptionsW] = useState()
    let [updateDescription, setUpdateDescription] = useState([])
    // update description use effect
    useEffect(() => {
        if(workach_update_description.length){
            setUpdateDescription(workach_update_description)
        } else if(workach_update_array.length){
            setUpdateDescription(workach_update_array[0].description)
        } else if(orgex_update_description.length){
            setUpdateDescriptionO(orgex_update_description)
        } else if(orgex_update_array.length){
            setUpdateDescriptionO(orgex_update_array[0].description)
        } else {
            setUpdateDescription([])
            setUpdateDescriptionO([])
        }
    }, [
            workach_update_array, 
            workach_update_description,
            orgex_update_array,
            orgex_update_description
        ]
    )
    // delete state
    const delete_workach_obj = workach.filter((val) => delete_workach_id === val.workachId)[0]

    // org-ex state
    // modal state
    const [isAddOrgexOpen = add_orgex] = useState()
    let showAddOrgex = isAddOrgexOpen? 'show-modal' : 'hidden-modal'
    const [isUpdateOrgexOpen = update_orgex] = useState()
    let showUpdateOrgex = isUpdateOrgexOpen? 'show-modal' : 'hidden-modal'
    const [isDeleteOrgexOpen = delete_orgex] = useState()
    let showDeleteOrgex = isDeleteOrgexOpen? 'show-modal' : 'hidden-modal'
    // add state
    const [addTitleNo, setAddTitleNo] = useState()
    const [addInstitutionNo, setAddInstitutionNo] = useState()
    const [addTimeNo, setAddTimeNo] = useState()
    const [addOptionsNo, setAddOptionsNo] = useState()
    const [addFillOptionsNo, setAddFillOptionsNo] = useState([])
    // update state
    const [updateTitleO, setUpdateTitleO] = useState()
    const [updateInstitutionO, setUpdateInstitutionO] = useState()
    const [updateTimeO, setUpdateTimeO] = useState()
    const [updateOptionsO, setUpdateOptionsO] = useState()
    let [updateDescriptionO, setUpdateDescriptionO] = useState([])
    // delete state
    const delete_orgex_obj = orgex.filter((val) => delete_orgex_id === val.orgexId)[0]

    return (
        <div>
{/* ================================================================================================================ add education modal starts */}
            {
                add_education?
                <div id="myModal" className={showAddEducation}>
                    <div className="c-modal">
                        <span onClick={()=>dispatch(closeAddEducation())} className="modal-close">&times;</span>
                        <div>
                            <h4 className="center">Add New Education</h4>
                            <table className="highlight">
                                <thead>
                                    <tr className="no-border">
                                        <td>
                                            <div className="input-field">
                                                <input id="starts" onChange={(e) => setAddStartsNe(e.target.value)} className="center validate" type="text" />
                                                <label htmlFor="starts">Education Starts</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="no-border">
                                        <td>
                                            <div className="input-field">
                                                <input id="finish" onChange={(e) => setAddFinishNe(e.target.value)} className="center validate" type="text" />
                                                <label htmlFor="finish">Education Finish</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="no-border">
                                        <td>
                                            <div className="input-field">
                                                <input id="institution" onChange={(e) => setAddInstitutionNe(e.target.value)} className="center validate" type="text" />
                                                <label htmlFor="institution">Institution</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="no-border">
                                        <td>
                                            <div className="input-field">
                                                <input id="grade" onChange={(e) => setAddGradeNe(e.target.value)} className="center validate" type="text" />
                                                <label htmlFor="grade">Grade</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="no-border">
                                        <td className="center">
                                            {
                                                education?
                                                <a onClick={()=>dispatch(addEducation(
                                                    {   
                                                        educationId: education.length + 1,
                                                        starts: addStartsNe || '',
                                                        finish: addFinishNe || '',
                                                        institution: addInstitutionNe || '',
                                                        grade: addGradeNe || '-'
                                                    }
                                                ))} href="#!" className="button-margin waves-effect waves-light btn">Save</a>
                                                :
                                                <a onClick={()=>dispatch(addEducation(
                                                    {   
                                                        id: 1,
                                                        educationId: 1,
                                                        starts: addStartsNe || '',
                                                        finish: addFinishNe || '',
                                                        institution: addInstitutionNe || '',
                                                        grade: addGradeNe || '-'
                                                    }
                                                ))} href="#!" className="button-margin waves-effect waves-light btn">Save</a>
                                            }
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
                :
                null
            }
{/* ================================================================================================================ add education modal ends */}
{/* ================================================================================================================ update education modal starts */}
            {   
                update_education?
                    <div id="myModal" className={showUpdateEducation}>
                        <div className="c-modal">
                            <span onClick={()=>dispatch(closeUpdateEducation())} className="modal-close">&times;</span>
                            <div>
                                <h4 className="center">Update Education</h4>
                                <h5>ID: {education[update_education_id].id}</h5>
                                <table className="highlight">
                                    <thead>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input id="starts" onChange={(e) => setUpdateStarts(e.target.value)} defaultValue={education[update_education_id].starts} className="center validate" type="text" />
                                                    <label htmlFor="starts">Education Starts</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input id="finish" onChange={(e) => setUpdateFinish(e.target.value)} defaultValue={education[update_education_id].finish} className="center validate" type="text" />
                                                    <label htmlFor="finish">Education Finish</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input id="institution" onChange={(e) => setUpdateInstitution(e.target.value)} defaultValue={education[update_education_id].institution} className="center validate" type="text" />
                                                    <label htmlFor="institution">Institution</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input id="grade" onChange={(e) => setUpdateGrade(e.target.value)} defaultValue={education[update_education_id].grade} className="center validate" type="text" />
                                                    <label htmlFor="grade">Grade</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td className="center">
                                                <a onClick={() => dispatch(updateEducation({
                                                    updatedEducation: {
                                                        starts: updateStarts||education[update_education_id].starts,
                                                        finish: updateFinish||education[update_education_id].finish,
                                                        institution: updateInstitution||education[update_education_id].institution,
                                                        grade: updateGrade||education[update_education_id].grade,
                                                        id: education[update_education_id].id
                                                    }
                                                }))} href="#!" className="button-margin waves-effect waves-light btn">Update</a>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                :
                null
            }
{/* ================================================================================================================ update education modal ends */}
{/* ================================================================================================================ delete education modal starts */}
            {
                delete_education?
                    <div id="myModal" className={showDeleteEducation}>
                        <div className="c-modal">
                            <span onClick={()=>dispatch(closeDeleteEducation())} className="modal-close">&times;</span>
                            <div>
                                <h5>Are you sure want to delete this?</h5>
                                <table className="highlight">
                                    <thead>
                                        <tr>
                                            <td>Starts</td>
                                            <td>Finish</td>
                                            <td>Institution</td>
                                            <td>Grade</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{delete_education_obj.starts}</td>
                                            <td>{delete_education_obj.finish}</td>
                                            <td>{delete_education_obj.institution}</td>
                                            <td>{delete_education_obj.grade}</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-3">
                                    <a href="#!" onClick={() => dispatch(deleteEducation(delete_education_obj.educationId))} className="button-margin waves-effect waves-light btn">Delete</a>
                                    <a href="#!" onClick={() => dispatch(closeDeleteEducation())} className="waves-effect waves-light btn">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                null
            }
{/* ================================================================================================================ delete education modal ends */}
{/* ================================================================================================================ add workach modal starts */}
            {
                add_workach?
                    <div id="myModal" className={showAddWorkach}>
                        <div className="c-modal">
                            <span 
                                onClick={
                                    ()=>dispatch(closeAddWorkach(),
                                        setAddFillOptionsNw([])
                                    )
                                } 
                                className="modal-close"
                            >
                                &times;
                            </span>
                            <div>
                                <h4 className="center">Add Work and Achievement</h4>
                                <table className="highlight">
                                    <thead>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input onChange={(e) => setAddTitleNw(e.target.value)} id="title" className="center validate" type="text" />
                                                    <label htmlFor="title">Title</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input onChange={(e) => setAddInstitutionNw(e.target.value)} id="institution" className="center validate" type="text" />
                                                    <label htmlFor="institution">Institution</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input onChange={(e) => setAddTimeNw(e.target.value)} id="time" className="center validate" type="text" />
                                                    <label htmlFor="time">Time</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <label htmlFor="browser-default">Options</label>
                                                <div className="input-field col s12">
                                                    <select 
                                                        defaultValue="" 
                                                        onChange={
                                                            (e) => dispatch(selectOptionsWorkach(e.target.value),
                                                            setAddOptionsNw(e.target.value)
                                                            )
                                                        }
                                                        className="browser-default validate"
                                                    >
                                                        <option value="" disabled>Choose your option</option>
                                                        <option value="Skills Included">Skills Included</option>
                                                        <option value="Key Responsibilities Included">Key Responsibilities Included</option>
                                                        <option value="Description">Description</option>
                                                        <option value="">None</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                        {
                                            select_options_workach?
                                                array_options_workach.map((val,index) => {
                                                    return(
                                                        <tr className="no-border" key={index}>
                                                            <td>
                                                                <div className="inputWithIcon inputIconBg row">
                                                                    <div className="col s12">
                                                                        <textarea
                                                                            onChange={
                                                                                (e) => setAddFillOptionsNw(
                                                                                    addFillOptionsNw.concat(
                                                                                        {
                                                                                            index,
                                                                                            timestamp: Date.now(),
                                                                                            value: e.target.value
                                                                                        }
                                                                                    )
                                                                                )
                                                                            }
                                                                            placeholder={addOptionsNw.split(' ')[0] + ' '+ parseInt(index+1)} 
                                                                            className="materialize-textarea"
                                                                        >
                                                                        </textarea>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            :
                                            null
                                        }
                                        {
                                            select_options_workach?
                                                <tr className="no-border">
                                                    <td>
                                                        <div className="row mb-3">
                                                            <div className="col s5"></div>
                                                            <div
                                                                onClick={
                                                                    ()=>dispatch(addOptionsWorkach())}
                                                                className="col s1 color-add-icon"
                                                            >
                                                                <i className="fas fa-plus-circle fa-2x" />
                                                            </div>
                                                            <div 
                                                                onClick={()=>dispatch(deleteOptionsWorkach())}
                                                                className="col s6 delete-modal-icon"
                                                            >
                                                                <i className="fa fa-minus-circle fa-2x" aria-hidden="true" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            :
                                            null
                                        }
                                        <tr className="no-border">
                                            <td className="center">
                                                {
                                                    workach?
                                                        <a onClick={() => { dispatch(addWorkach(
                                                            {
                                                                newWorkach: {
                                                                    title: addTitleNw || '',
                                                                    institution: addInstitutionNw || '',
                                                                    time: addTimeNw || '',
                                                                    opt: addOptionsNw || '',
                                                                    description: addFillOptionsNw || '',
                                                                    length: Math.max(...addFillOptionsNw.map((val) => val.index))+1,
                                                                    workachId: workach.length + 1,
                                                                    id: workach.length+1
                                                                }
                                                            }),
                                                            setAddFillOptionsNw([])
                                                        )}} href="#!" className="ml-2 button-margin waves-effect waves-light btn">Save</a>
                                                        :
                                                            <a onClick={() => { dispatch(addWorkach(
                                                                {
                                                                    title: addTitleNw || '',
                                                                    institution: addInstitutionNw || '',
                                                                    time: addTimeNw || '',
                                                                    opt: addOptionsNw || '',
                                                                    description: addFillOptionsNw || '',
                                                                    length: Math.max(...addFillOptionsNw.map((val) => val.index))+1,
                                                                    workachId: 1,
                                                                    id: 1
                                                                }),
                                                                setAddFillOptionsNw([])
                                                            )}} href="#!" className="ml-2 button-margin waves-effect waves-light btn">Save</a>
                                                }
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                :
                null
            }
{/* ================================================================================================================ add workach modal ends */}
{/* ================================================================================================================ update workach modal starts */}
            {
                update_workach?
                    <div id="myModal" className={showUpdateWorkach}>
                        <div className="c-modal">
                            <span 
                                onClick = {
                                    ()=>dispatch(
                                        closeUpdateWorkach(),
                                        setUpdateOptionsW('')
                                    )
                                    } 
                                className="modal-close"
                            >
                                &times;
                            </span>
                            <div>
                                <h4 className="center">Update Work and Achievement</h4>
                                <h5>ID: {workach_update_array[0].id}</h5>
                                <table className="highlight">
                                    <thead>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input
                                                        id="title"
                                                        onChange={
                                                            (e) => {
                                                                setUpdateTitleW(e.target.value)
                                                            }
                                                        }
                                                        defaultValue={workach_update_array[0].title}
                                                        className="center validate" 
                                                        type="text" 
                                                    />
                                                    <label htmlFor="title">Title</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input 
                                                        id="institution" 
                                                        onChange={
                                                            (e) => {
                                                                setUpdateInstitutionW(e.target.value)
                                                            }
                                                        }
                                                        defaultValue={workach_update_array[0].institution}
                                                        className="center validate" 
                                                        type="text" 
                                                    />
                                                    <label htmlFor="institution">Institution</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input 
                                                        id="time" 
                                                        onChange={
                                                            (e) => {
                                                                setUpdateTimeW(e.target.value)
                                                            }
                                                        }
                                                        defaultValue={workach_update_array[0].time}
                                                        className="center validate" 
                                                        type="text" 
                                                    />
                                                    <label htmlFor="time">Time</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <label htmlFor="browser-default">Options</label>
                                                <div className="input-field col s12">
                                                    <select
                                                        onChange= {
                                                            (e) => {
                                                                setUpdateOptionsW(e.target.value)
                                                            }
                                                        }
                                                        defaultValue= {workach_update_array[0].opt}
                                                        className="browser-default validate"
                                                    >
                                                        <option value="Skills Included">Skills Included</option>
                                                        <option value="Key Responsibilities Included">Key Responsibilities Included</option>
                                                        <option value="Description">Description</option>
                                                        <option value="-">None</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                        {   
                                            updateOptionsW !== '-' ?
                                                updateDescription.map((val,index) => {
                                                    if (updateOptionsW === undefined || updateOptionsW === null) {
                                                        return (
                                                            <tr className="no-border" key={index}>
                                                                <td>
                                                                    <div className="inputWithIcon inputIconBg row">
                                                                        <div className="col s12">
                                                                            <textarea
                                                                                onChange={(e) => {
                                                                                    dispatch(updateDescriptionWorkach(
                                                                                        e.target.value, index, updateDescription
                                                                                    ))
                                                                                }}
                                                                                defaultValue={val}
                                                                                placeholder={
                                                                                    workach_update_array[0].opt.split(' ')[0] + ' '+ parseInt(index+1)
                                                                                }
                                                                                className="materialize-textarea"
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    } 
                                                    else {
                                                        return (
                                                            <tr className="no-border" key={index}>
                                                                <td>
                                                                    <div className="inputWithIcon inputIconBg row">
                                                                        <div className="col s12">
                                                                            <textarea
                                                                                onChange={(e) => {
                                                                                    dispatch(updateDescriptionWorkach(
                                                                                        e.target.value, index, updateDescription
                                                                                    ))
                                                                                }}
                                                                                defaultValue={val}
                                                                                placeholder={
                                                                                    updateOptionsW.split(' ')[0] + ' '+ parseInt(index+1)
                                                                                }
                                                                                className="materialize-textarea"
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                })
                                            : 
                                            null
                                        }
                                        <tr className="no-border">
                                            <td>
                                                <div className="row mb-3">
                                                    <div className="col s5"></div>
                                                    <div
                                                        onClick={() => {
                                                            dispatch(addUpdateDescriptionWorkach( updateDescription ))
                                                        }}
                                                        className="col s1 color-add-icon"
                                                    >
                                                        <i className="fas fa-plus-circle fa-2x" />
                                                    </div>
                                                    <div 
                                                        onClick={() => {
                                                            dispatch(deleteUpdateDescriptionWorkach( updateDescription ))
                                                        }}
                                                        className="col s6 delete-modal-icon"
                                                    >
                                                        <i className="fa fa-minus-circle fa-2x" aria-hidden="true" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td className="center">
                                                <a 
                                                    onClick={
                                                        () => {
                                                            dispatch(updateWorkach({
                                                                updatedWorkach: {
                                                                    id: workach_update_array[0].id,
                                                                    workachId: workach_update_array[0].workachId,
                                                                    title: updateTitleW || workach_update_array[0].title,
                                                                    institution: updateInstitutionW || workach_update_array[0].institution,
                                                                    time: updateTimeW || workach_update_array[0].time,
                                                                    opt: updateOptionsW || workach_update_array[0].opt,
                                                                    description: workach_update_description || workach_update_array[0].description
                                                                }
                                                            }))
                                                        }
                                                    }
                                                    href="#!" 
                                                    className="ml-2 button-margin waves-effect waves-light btn"
                                                >Update</a>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                :
                null
            }
{/* ================================================================================================================ update workach modal ends */}
{/* ================================================================================================================ delete workach modal starts */}
            {
                delete_workach?
                    <div id="myModal" className={showDeleteWorkach}>
                        <div className="c-modal">
                            <span onClick={()=>dispatch(closeDeleteWorkach())} className="modal-close">&times;</span>
                            <div>
                                <h5>Are you sure want to delete this?</h5>
                                <table className="highlight">
                                    <thead>
                                        <tr>
                                            <td>Title</td>
                                            <td>Institution</td>
                                            <td>Time</td>
                                            <td>Option</td>
                                            <td>Description</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{delete_workach_obj.title}</td>
                                            <td>{delete_workach_obj.institution}</td>
                                            <td>{delete_workach_obj.time}</td>
                                            <td>{delete_workach_obj.opt}</td>
                                            <td>
                                                <table>
                                                    <tbody>
                                                        {delete_workach_obj.description.map((val, index) => {
                                                            return (
                                                                <tr key={index} className="no-border">
                                                                    <td>{val}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-3">
                                    <a href="#!" onClick={() => dispatch(deleteWorkach(delete_workach_obj.workachId))} className="button-margin waves-effect waves-light btn">Delete</a>
                                    <a href="#!" onClick={() => dispatch(closeDeleteWorkach())} className="waves-effect waves-light btn">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                null
            }
{/* ================================================================================================================ delete workach modal ends */}
{/* ================================================================================================================ add orgex modal starts */}
            {
                add_orgex?
                    <div id="myModal" className={showAddOrgex}>
                        <div className="c-modal">
                            <span 
                                onClick={() => {dispatch(closeAddOrgex())}}
                                className="modal-close"
                            >
                                &times;
                            </span>
                            <div>
                                <h4 className="center">Add Organizational Experiences</h4>
                                <table className="highlight">
                                    <thead>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input 
                                                        onChange={(e) => setAddTitleNo(e.target.value)}
                                                        id="title" 
                                                        className="center validate" 
                                                        type="text" 
                                                    />
                                                    <label htmlFor="title">Title</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input 
                                                        onChange={(e) => setAddInstitutionNo(e.target.value)}
                                                        id="institution" 
                                                        className="center validate" 
                                                        type="text" 
                                                    />
                                                    <label htmlFor="institution">Institution</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input 
                                                        onChange={(e) => setAddTimeNo(e.target.value)}
                                                        id="time" 
                                                        className="center validate" 
                                                        type="text" 
                                                    />
                                                    <label htmlFor="time">Time</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <label htmlFor="browser-default">Options</label>
                                                <div className="input-field col s12">
                                                    <select 
                                                        onChange={
                                                            (e) => dispatch(selectOptionsOrgex(e.target.value),
                                                            setAddOptionsNo(e.target.value)
                                                            )
                                                        }
                                                        defaultValue=""
                                                        className="browser-default validate"
                                                    >
                                                        <option value="" disabled>Choose your option</option>
                                                        <option value="Skills Included">Skills Included</option>
                                                        <option value="Key Responsibilities Included">Key Responsibilities Included</option>
                                                        <option value="Description">Description</option>
                                                        <option value="">None</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                        {
                                            select_options_orgex?
                                                array_options_orgex.map((val,index) => {
                                                    return(
                                                        <tr className="no-border" key={index}>
                                                            <td>
                                                                <div className="inputWithIcon inputIconBg row">
                                                                    <div className="col s12">
                                                                        <textarea
                                                                            onChange={
                                                                                (e) => setAddFillOptionsNo(
                                                                                    addFillOptionsNo.concat(
                                                                                        {
                                                                                            index,
                                                                                            timestamp: Date.now(),
                                                                                            value: e.target.value
                                                                                        }
                                                                                    )
                                                                                )
                                                                            }
                                                                            placeholder={addOptionsNo.split(' ')[0] + ' '+ parseInt(index+1)} 
                                                                            className="materialize-textarea"
                                                                        >
                                                                        </textarea>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            :
                                            null
                                        }
                                        {
                                            select_options_orgex?
                                                <tr className="no-border">
                                                    <td>
                                                        <div className="row mb-3">
                                                            <div className="col s5"></div>
                                                            <div
                                                                onClick={
                                                                    ()=>dispatch(addOptionsOrgex())}
                                                                className="col s1 color-add-icon"
                                                            >
                                                                <i className="fas fa-plus-circle fa-2x" />
                                                            </div>
                                                            <div 
                                                                onClick={()=>dispatch(deleteOptionsOrgex())}
                                                                className="col s6 delete-modal-icon"
                                                            >
                                                                <i className="fa fa-minus-circle fa-2x" aria-hidden="true" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            :
                                            null
                                        }
                                        <tr className="no-border">
                                            <td className="center">
                                                {
                                                    orgex?
                                                        <a onClick={
                                                            () => {
                                                                dispatch(addOrgex(
                                                                    {
                                                                        newOrgex: {
                                                                            title: addTitleNo || '',
                                                                            institution: addInstitutionNo || '',
                                                                            time: addTimeNo || '',
                                                                            opt: addOptionsNo || '',
                                                                            description: addFillOptionsNo || '',
                                                                            length: Math.max(...addFillOptionsNo.map((val) => val.index))+1,
                                                                            orgexId: orgex.length + 1
                                                                        }
                                                                    }
                                                                ))
                                                            }
                                                        } href="#!" className="ml-2 button-margin waves-effect waves-light btn">
                                                            Save
                                                        </a>
                                                    :
                                                        <a onClick={
                                                            () => {
                                                                dispatch(addOrgex(
                                                                    {
                                                                        newOrgex: {
                                                                            title: addTitleNo || '',
                                                                            institution: addInstitutionNo || '',
                                                                            time: addTimeNo || '',
                                                                            opt: addOptionsNo || '',
                                                                            description: addFillOptionsNo || '',
                                                                            length: Math.max(...addFillOptionsNo.map((val) => val.index))+1,
                                                                            orgexId: 1
                                                                        }
                                                                    }
                                                                ))
                                                            }
                                                        } href="#!" className="ml-2 button-margin waves-effect waves-light btn">
                                                            Save
                                                        </a>
                                                }
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                :
                null
            }
{/* ================================================================================================================ add orgex modal ends */}
{/* ================================================================================================================ update orgex modal starts */}
            {
                update_orgex?
                    <div id="myModal" className={showUpdateOrgex}>
                        <div className="c-modal">
                            <span 
                                onClick = {
                                    ()=>dispatch(
                                        closeUpdateOrgex(),
                                        setUpdateOptionsO('')
                                    )
                                } 
                                className="modal-close"
                            >
                                &times;
                            </span>
                            <div>
                                <h4 className="center">Update Organizational Experiences</h4>
                                <h5>ID: {orgex_update_array[0].id}</h5>
                                <table className="highlight">
                                    <thead>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input
                                                        id="title"
                                                        onChange={
                                                            (e) => {
                                                                setUpdateTitleO(e.target.value)
                                                            }
                                                        }
                                                        defaultValue={orgex_update_array[0].title}
                                                        className="center validate" 
                                                        type="text" 
                                                    />
                                                    <label htmlFor="title">Title</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input
                                                        id="institution"
                                                        onChange={
                                                            (e) => {
                                                                setUpdateInstitutionO(e.target.value)
                                                            }
                                                        }
                                                        defaultValue={orgex_update_array[0].institution}
                                                        className="center validate" 
                                                        type="text" 
                                                    />
                                                    <label htmlFor="institution">Institution</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input
                                                        id="time"
                                                        onChange={
                                                            (e) => {
                                                                setUpdateTimeO(e.target.value)
                                                            }
                                                        }
                                                        defaultValue={orgex_update_array[0].time}
                                                        className="center validate" 
                                                        type="text" 
                                                    />
                                                    <label htmlFor="time">Time</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <label htmlFor="browser-default">Options</label>
                                                <div className="input-field col s12">
                                                    <select
                                                        onChange= {
                                                            (e) => {
                                                                setUpdateOptionsO(e.target.value)
                                                            }
                                                        }
                                                        defaultValue= {orgex_update_array[0].opt}
                                                        className="browser-default validate"
                                                    >
                                                        <option value="Skills Included">Skills Included</option>
                                                        <option value="Key Responsibilities Included">Key Responsibilities Included</option>
                                                        <option value="Description">Description</option>
                                                        <option value="-">None</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                        {   
                                            updateOptionsO !== '-' ?
                                                updateDescriptionO.map((val,index) => {
                                                    if (updateOptionsW === undefined || updateOptionsW === null) {
                                                        return (
                                                            <tr className="no-border" key={index}>
                                                                <td>
                                                                    <div className="inputWithIcon inputIconBg row">
                                                                        <div className="col s12">
                                                                            <textarea
                                                                                onChange={(e) => {
                                                                                    dispatch(updateDescriptionOrgex(
                                                                                        e.target.value, index, updateDescriptionO
                                                                                    ))
                                                                                }}
                                                                                defaultValue={val}
                                                                                placeholder={
                                                                                    orgex_update_array[0].opt.split(' ')[0] + ' '+ parseInt(index+1)
                                                                                }
                                                                                className="materialize-textarea"
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    } 
                                                    else {
                                                        return (
                                                            <tr className="no-border" key={index}>
                                                                <td>
                                                                    <div className="inputWithIcon inputIconBg row">
                                                                        <div className="col s12">
                                                                            <textarea
                                                                                onChange={(e) => {
                                                                                    dispatch(updateDescriptionOrgex(
                                                                                        e.target.value, index, updateDescriptionO
                                                                                    ))
                                                                                }}
                                                                                defaultValue={val}
                                                                                placeholder={
                                                                                    updateOptionsO.split(' ')[0] + ' '+ parseInt(index+1)
                                                                                }
                                                                                className="materialize-textarea"
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                })
                                            : 
                                            null
                                        }
                                        <tr className="no-border">
                                            <td>
                                                <div className="row mb-3">
                                                    <div className="col s5"></div>
                                                    <div
                                                        onClick={() => {
                                                            dispatch(addUpdateDescriptionOrgex( updateDescriptionO ))
                                                        }}
                                                        className="col s1 color-add-icon"
                                                    >
                                                        <i className="fas fa-plus-circle fa-2x" />
                                                    </div>
                                                    <div 
                                                        onClick={() => {
                                                            dispatch(deleteUpdateDescriptionOrgex( updateDescriptionO ))
                                                        }}
                                                        className="col s6 delete-modal-icon"
                                                    >
                                                        <i className="fa fa-minus-circle fa-2x" aria-hidden="true" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td className="center">
                                                <a 
                                                    onClick={
                                                        () => {
                                                            dispatch(updateOrgex({
                                                                updatedOrgex: {
                                                                    id: orgex_update_array[0].id,
                                                                    workachId: orgex_update_array[0].workachId,
                                                                    title: updateTitleO || orgex_update_array[0].title,
                                                                    institution: updateInstitutionO || orgex_update_array[0].institution,
                                                                    time: updateTimeO || orgex_update_array[0].time,
                                                                    opt: updateOptionsO || orgex_update_array[0].opt,
                                                                    description: updateDescriptionO || orgex_update_array[0].description
                                                                }
                                                            }))
                                                        }
                                                    }
                                                    href="#!" 
                                                    className="ml-2 button-margin waves-effect waves-light btn"
                                                >Update</a>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                :
                    null
            }
{/* ================================================================================================================ update orgex modal ends */}
{/* ================================================================================================================ delete orgex modal starts */}
            {
                delete_orgex?
                    <div id="myModal" className={showDeleteOrgex}>
                        <div className="c-modal">
                            <span onClick={()=>dispatch(closeDeleteOrgex())} className="modal-close">&times;</span>
                            <div>
                                <h5>Are you sure want to delete this?</h5>
                                <table className="highlight">
                                    <thead>
                                        <tr>
                                            <td>Title</td>
                                            <td>Institution</td>
                                            <td>Time</td>
                                            <td>Option</td>
                                            <td>Description</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{delete_orgex_obj.title}</td>
                                            <td>{delete_orgex_obj.institution}</td>
                                            <td>{delete_orgex_obj.time}</td>
                                            <td>{delete_orgex_obj.opt}</td>
                                            <td>
                                                <table>
                                                    <tbody>
                                                        {delete_orgex_obj.description.map((val, index) => {
                                                            return (
                                                                <tr key={index} className="no-border">
                                                                    <td>{val}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-3">
                                    <a href="#!" onClick={() => dispatch(deleteOrgex(delete_orgex_obj.orgexId))} className="button-margin waves-effect waves-light btn">Delete</a>
                                    <a href="#!" onClick={() => dispatch(closeDeleteOrgex())} className="waves-effect waves-light btn">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                null
            }
{/* ================================================================================================================ delete orgex modal ends */}
        </div>
    )
}

export default Modals