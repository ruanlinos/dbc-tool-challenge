import ToolsReducer from './tools/duck'
import {combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  ToolsReducer
})


export type AppState = ReturnType<typeof rootReducer>

export default rootReducer