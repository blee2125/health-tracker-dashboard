import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SettingsService from "../services/SettingsService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const getSettings = createAsyncThunk(
    "settings/get",
      async (token) => {
        const res = await SettingsService.get(createHead(token));
        return res.data;
      }
);

export const updateSettings = createAsyncThunk(
    "settings/update",
      async (data) => {
        const res = await SettingsService.update(data.settings, createHead(data.userToken));
        return res.data;
      }
);

export const deleteSettings = createAsyncThunk(
    "settings/delete",
      async (data) => {
        const res = await SettingsService.delete(createHead(data));
        return res.data;
      }
);

const initialState = {
  settings: {
    collectExerciseData: true,
    collectFoodData: true,
    collectWaterData: true,
    collectWeightData: true,
    notifications: true
}}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsLogout: () => {
      return initialState
    },
    toggleSettings: (state, action) => {
      const setting = action.payload.setting
      if (setting === 'onNotifications') {
        state.settings.notifications = true
      } else if (setting === 'offNotifications') {
        state.settings.notifications = false
      } else {
        state.settings[setting] = (state.settings[setting] ? false : true)
      }
    }
  },
  extraReducers: {
    [getSettings.fulfilled]: (state, action) => {
      state.settings = {...state.settings, ...action.payload}
    },
    [updateSettings.fulfilled]: (state, action) => {
      
    },
    [deleteSettings.fulfilled]: () => {
      return initialState
    },
  },
})

export const { toggleSettings, settingsLogout } = settingsSlice.actions

export default settingsSlice.reducer