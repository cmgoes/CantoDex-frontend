import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import comp from './comp/reducer'
import ctoken from './ctoken/reducer'

const store = configureStore({
  reducer: {
    comp,
    ctoken
  }
})

setupListeners(store.dispatch)

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
