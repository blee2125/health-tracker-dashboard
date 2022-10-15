import { configureStore } from '@reduxjs/toolkit'
import waterReducer from './reducers/waterSlice'
import exerciseReducer from './reducers/exerciseSlice'
import foodReducer from './reducers/foodSlice'

export default configureStore({
  reducer: {
    waterState: waterReducer,
    exerciseState: exerciseReducer,
    foodState: foodReducer
  },
})