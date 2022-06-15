import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Tag {
  id: string;
  name: string;
}

export interface Tool{
  id: string;
  name: string;
  link: string;
  tag: Tag[]
  description: string;
}

export interface ToolState {
  tools: Tool[] | [];
  isOnlyTag: boolean;
}

export const initialState: ToolState = {
  tools: [{
    name: 'Tool Name',
    description: 'Tool Description',
    link: 'Tool Link',
    tag: [{
        id: '1',
        name: 'Tag Name'
    }],
    id: '1'
  }],
  isOnlyTag: true
};

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    set: (state, {payload}: PayloadAction<ToolState>) => ({...state, ...payload}),
    toggleIsOnlyTag: state => ({...state, isOnlyTag: !state.isOnlyTag}),
    callAlert: () => alert('callAlert')
  }
})

export const toolActions = toolSlice.actions;
export default toolSlice.reducer;
