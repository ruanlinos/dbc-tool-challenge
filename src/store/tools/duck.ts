import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Tag {
  id: string;
  name: string;
}

export interface ToolState {
  id: string;
  name: string;
  link: string;
  tag: Tag[]
  description: string;
}

export interface State {
  tools: ToolState[] | [];
  isOnlyTag: boolean;
}

export const initialState: State = {
  tools: [],
  isOnlyTag: false
};

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    set: (state, {payload}: PayloadAction<ToolState[]>) => ({...state, ...payload}),
    toggleIsOnlyTag: state => ({...state, isOnlyTag: !state.isOnlyTag}) 
  }
})

export const toolActions = toolSlice.actions;
export default toolSlice.reducer;