import { configureStore } from '@reduxjs/toolkit'
import waterReducer from './reducers/waterSlice'
import exerciseReducer from './reducers/exerciseSlice'

export default configureStore({
  reducer: {
    waterState: waterReducer,
    exerciseState: exerciseReducer
  },
})