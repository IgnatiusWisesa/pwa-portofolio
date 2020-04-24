import { combineReducers } from 'redux'
import nameOverviewReducer from './name-overviewAdm/name-overviewReducers'

const rootReducer = combineReducers({
    nameOverview: nameOverviewReducer
})

export default rootReducer