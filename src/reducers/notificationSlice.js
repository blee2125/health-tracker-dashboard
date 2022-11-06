import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: '',
  type: ''
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationReset: () => {
      return initialState
    },
    success: (state, action) => {
        console.log(action.payload)
        state.message = action.payload.message
        state.type = 'success'
    },
    danger: (state, notification) => {
        state.message = notification
        state.type = 'danger'
    },
  },
  extraReducers: {
  },
})

// Action creators are generated for each case reducer function
export const { danger, success, notificationReset } = notificationSlice.actions

export default notificationSlice.reducer