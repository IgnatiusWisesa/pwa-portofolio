export {
    fetchName,
    fetchOverview,
    updateName,
    updateOverview
} from './name-overviewAdm/name-overviewActions'

export {
    fetchCs,
    postCs,
    deleteCs,
    fetchNcs,
    postNcs,
    deleteNcs
} from './skills/skillsActions'

export {
    fetchEducation,
    rearrangeEducationArray,
    addEducation,
    updateEducation,
    deleteEducation
} from './education/educationActions'

export {
    fetchWorkach,
    rearrangeWorkachArray,
    addWorkach,
    updateWorkach,
    deleteWorkach
} from './workach/workachActions'

export {
    fetchOrgex,
    rearrangeOrgexArray,
    addOrgex,
    updateOrgex,
    deleteOrgex
} from './orgex/orgexActions'

export {
    // education
    openAddEducation,
    closeAddEducation,
    openUpdateEducation,
    closeUpdateEducation,
    openDeleteEducation,
    closeDeleteEducation,
    // work-ach
    openAddWorkach,
    closeAddWorkach,
    selectOptionsWorkach,
    addOptionsWorkach,
    deleteOptionsWorkach,
    clickUpdateWorkach,
    closeUpdateWorkach,
    updateDescriptionWorkach,
    addUpdateDescriptionWorkach,
    deleteUpdateDescriptionWorkach,
    openDeleteWorkach,
    closeDeleteWorkach,
    // org-ex
    openAddOrgex,
    closeAddOrgex,
    selectOptionsOrgex,
    addOptionsOrgex,
    deleteOptionsOrgex,
    clickUpdateOrgex,
    closeUpdateOrgex,
    updateDescriptionOrgex,
    addUpdateDescriptionOrgex,
    deleteUpdateDescriptionOrgex,
    openDeleteOrgex,
    closeDeleteOrgex
} from './modals/modalsActions'

export {
    adminVerify,
    adminLogin,
    adminLogout
} from './auth-admin/authAdminActions'