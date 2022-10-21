import { configureStore } from '@reduxjs/toolkit'
import waterReducer from './reducers/waterSlice'
import exerciseReducer from './reducers/exerciseSlice'
import foodReducer from './reducers/foodSlice'
import userReducer from './reducers/userSlice'

export default configureStore({
  reducer: {
    userState: userReducer,
    waterState: waterReducer,
    exerciseState: exerciseReducer,
    foodState: foodReducer
  },
})