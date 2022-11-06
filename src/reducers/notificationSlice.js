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
    primary: (state, action) => {
      state.message = action.payload.message
      state.type = 'primary'
    },
    danger: (state, notification) => {
        state.message = notification
        state.type = 'danger'
    },
    secondary: (state, notification) => {
        state.message = notification
        state.type = 'secondary'
    },
    warning: (state, notification) => {
        state.message = notification
        state.type = 'warning'
    },
    info: (state, notification) => {
        state.message = notification
        state.type = 'info'
    },
    light: (state, notification) => {
        state.message = notification
        state.type = 'light'
    },
    dark: (state, notification) => {
        state.message = notification
        state.type = 'dark'
    },
  },
  extraReducers: {
  },
})

// Action creators are generated for each case reducer function
export const { notify, danger, success, primary, secondary, warning, info, light, dark, notificationReset } = notificationSlice.actions

export default notificationSlice.reducer