import {AppState} from '../rootReducer'
import {Tool} from './duck'

const tools = (state: AppState):Tool[] => state.tools.tools;

const isOnlyTag = (state: AppState):boolean => state.tools.isOnlyTag

export default { get: tools, isOnlyTag}
