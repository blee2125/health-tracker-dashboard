import { configureStore } from '@reduxjs/toolkit'
import waterReducer from './reducers/waterSlice'

export default configureStore({
  reducer: {
    waterState: waterReducer
  },
})