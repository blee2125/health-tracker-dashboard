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
    collectExerciseData: true,
    collectFoodData: true,
    collectWaterData: true,
    collectWeightData: true
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsLogout: () => {
      return initialState
    },
    changeCollectExercise: (state) => {
      state.collectExerciseData = (state.collectExerciseData ? false : true)
    },
    changeCollectFood: (state) => {
      state.collectFoodData = (state.collectFoodData ? false : true)
    },
    changeCollectWater: (state) => {
      state.collectWaterData = (state.collectWaterData ? false : true)
    },
    changeCollectWeight: (state) => {
      state.collectWeightData = (state.collectWeightData ? false : true)
    },
  },
  extraReducers: {
    [getSettings.fulfilled]: (state, action) => {
      state.collectExerciseData = action.payload[0].collectExerciseData
      state.collectFoodData = action.payload[0].collectFoodData
      state.collectWaterData = action.payload[0].collectWaterData
      state.collectWeightData = action.payload[0].collectWeightData
    },
    [updateSettings.fulfilled]: (state, action) => {
      state.collectExerciseData = action.payload[0].collectExerciseData
      state.collectFoodData = action.payload[0].collectFoodData
      state.collectWaterData = action.payload[0].collectWaterData
      state.collectWeightData = action.payload[0].collectWeightData
    },
    [deleteSettings.fulfilled]: () => {
      return initialState
    },
  },
})

export const { settingsLogout, changeCollectExercise, changeCollectFood, changeCollectWater, changeCollectWeight } = settingsSlice.actions

export default settingsSlice.reducer