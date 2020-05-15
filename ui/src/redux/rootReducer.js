import { combineReducers } from 'redux'
import nameOverviewReducer from './name-overviewAdm/name-overviewReducers'
import skillsReducers from './skills/skillsReducers'
import educationReducers from './education/educationReducers'
import modalsReducers from './modals/modalsReducers'
import workachReducers from './workach/workachReducers'
import orgexReducers from './orgex/orgexReducers'
import authAdminReducers from './auth-admin/authAdminReducers'

const rootReducer = combineReducers({
    nameOverview: nameOverviewReducer,
    skills: skillsReducers,
    education: educationReducers,
    modals: modalsReducers,
    workach: workachReducers,
    orgex: orgexReducers,
    authAdmin: authAdminReducers
})

export default rootReducer