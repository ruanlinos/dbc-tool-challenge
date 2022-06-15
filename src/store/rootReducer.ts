import tools from './tools/duck'
import {combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  tools
})


export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
