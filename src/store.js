import { configureStore } from '@reduxjs/toolkit'
import waterReducer from './reducers/waterSlice'
import exerciseReducer from './reducers/exerciseSlice'
import foodReducer from './reducers/foodSlice'
import userReducer from './reducers/userSlice'
import weightReducer from './reducers/weightSlice'
import settingsReducer from './reducers/settingsSlice'
import healthGoalReducer from './reducers/healthGoalSlice'

export default configureStore({
  reducer: {
    userState: userReducer,
    settingsState: settingsReducer,
    waterState: waterReducer,
    exerciseState: exerciseReducer,
    foodState: foodReducer,
    weightState: weightReducer,
    healthGoalState: healthGoalReducer
  },
})