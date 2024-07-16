import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {}
})

export type RoorReducer = ReturnType<typeof store.getState>
