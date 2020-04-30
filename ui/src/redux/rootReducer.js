import { combineReducers } from 'redux'
import nameOverviewReducer from './name-overviewAdm/name-overviewReducers'
import skillsReducers from './skills/skillsReducers'
import educationReducers from './education/educationReducers'
import modalsReducers from './modals/modalsReducers'

const rootReducer = combineReducers({
    nameOverview: nameOverviewReducer,
    skills: skillsReducers,
    education: educationReducers,
    modals: modalsReducers
})

export default rootReducer