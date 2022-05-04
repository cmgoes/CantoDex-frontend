import { createSlice } from '@reduxjs/toolkit'

export interface CompState {
  readonly totalComp: number | null
}

const initialState: CompState = {
  totalComp: null,
}

const compSlice = createSlice({
  name: 'ctoken',
  initialState,
  reducers: {
    addCTokenData(state, action) {
      // state.totalComp = action.payload.totalComp
    },
  }
})

export const { addCTokenData } = compSlice.actions
export default compSlice.reducer
