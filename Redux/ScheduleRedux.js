import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import DebugConfig from '../Config/DebugConfig'
import { createTypes } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateSchedule: ['schedule'],
  getScheduleUpdates: ['schedule']
})

export const ScheduleTypes = createTypes(`
    RETRIEVE_SHEDULE
    UPDATE_SCHEDULE
    `, {}
)

export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  // TODO: initial state for schedule
  retrievedSchedule: null,
  currentSchedule: null
})

/* ------------- Reducers ------------- */

export const getScheduleUpdates = (state, { schedule }) => {
  return state.merge({ retrievedSchedule: schedule })
}

export const updateSchedule = (state, { schedule }) => {
  return state.merge({ currentSchedule: schedule })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [ScheduleTypes.RETRIEVE_SHEDULE]: getScheduleUpdates,
  [ScheduleTypes.UPDATE_SCHEDULE]: updateSchedule
})
