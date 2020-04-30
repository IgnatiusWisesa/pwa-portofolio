import React, { useState } from 'react'
import './modals.css'
import { useSelector, useDispatch } from 'react-redux'
import {
    closeAddEducation,
    addEducation,
    closeUpdateEducation,
    updateEducation,
    deleteEducation,
    closeDeleteEducation
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
    const education = useSelector( state => state.education.education_array )
    const modals = useSelector( state => state.modals )
    const {
        add_education,
        update_education,
        update_education_id,
        delete_education,
        delete_education_id
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
    const showDeleteEducation = isDeleteEducationOpen? 'show-modal' : 'hidden-modal'
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

    return (
        <div>
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
                                            <a onClick={()=>dispatch(addEducation(
                                                {
                                                    starts: addStartsNe,
                                                    finish: addFinishNe,
                                                    institution: addInstitutionNe,
                                                    grade: addGradeNe
                                                }
                                            ))} href="#!" className="button-margin waves-effect waves-light btn">Save</a>
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
                                                    <input id="starts" onChange={(e) => setUpdateStarts(e.target.value)} value={updateStarts||education[update_education_id].starts} className="center validate" type="text" />
                                                    <label htmlFor="starts">Education Starts</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input id="finish" onChange={(e) => setUpdateFinish(e.target.value)} value={updateFinish||education[update_education_id].finish} className="center validate" type="text" />
                                                    <label htmlFor="finish">Education Finish</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input id="institution" onChange={(e) => setUpdateInstitution(e.target.value)} value={updateInstitution||education[update_education_id].institution} className="center validate" type="text" />
                                                    <label htmlFor="institution">Institution</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="no-border">
                                            <td>
                                                <div className="input-field">
                                                    <input id="grade" onChange={(e) => setUpdateGrade(e.target.value)} value={updateGrade||education[update_education_id].grade} className="center validate" type="text" />
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
                                            <td>{education[delete_education_id].starts}</td>
                                            <td>{education[delete_education_id].finish}</td>
                                            <td>{education[delete_education_id].institution}</td>
                                            <td>{education[delete_education_id].grade}</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-3">
                                    <a href="#!" onClick={() => dispatch(deleteEducation(education[delete_education_id].id))} className="button-margin waves-effect waves-light btn">Delete</a>
                                    <a href="#!" onClick={() => dispatch(closeDeleteEducation())} className="waves-effect waves-light btn">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                null
            }

        </div>
    )
}

export default Modals