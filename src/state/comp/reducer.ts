import { createSlice } from '@reduxjs/toolkit'

export interface CompState {
  readonly totalComp: number | null
  readonly totalValue: number | null
  readonly compBalance: number | null
  readonly compEarned: number | null
  readonly compPrice: number | null
  readonly loading: boolean
}

const initialState: CompState = {
  totalComp: null,
  totalValue: null,
  compBalance: null,
  compEarned: null,
  compPrice: null,
  loading: false
}

const compSlice = createSlice({
  name: 'comp',
  initialState,
  reducers: {
    addUserCompData(state, action) {
      console.log(state, action)
      state.totalComp = action.payload.totalComp
      state.compBalance = action.payload.compBalance
      state.totalValue = action.payload.totalValue
      state.compEarned = action.payload.compEarned
      state.compPrice = action.payload.compPrice
      state.loading = false
    },
    changeStatus(state, action) {
      state.loading = action.payload
    }
  }
})

export const { addUserCompData, changeStatus } = compSlice.actions
export default compSlice.reducer
