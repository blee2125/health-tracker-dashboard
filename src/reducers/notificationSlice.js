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
    notify: (state, action) => {
      state.message = action.payload.message
      state.type = action.payload.type
    },
    success: (state, action) => {
        state.message = action.payload.message
        state.type = 'success'
    },
  },
  extraReducers: {
  },
})

// Action creators are generated for each case reducer function
export const { notify, success, notificationReset } = notificationSlice.actions

export default notificationSlice.reducer