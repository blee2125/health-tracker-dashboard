import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WeightService from "../services/WeightService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const createWeight = createAsyncThunk(
  "weight/create",
    async (data) => {
      const res = await WeightService.create(data.data, createHead(data.token));
      return res.data;
    }
);

export const getCurrentWeight = createAsyncThunk(
  "weight/getcurrentweight",
    async (token) => {
      const res = await WeightService.getCurrentWeight(createHead(token));
      return res.data;
    }
);

export const getWeightLast30Days = createAsyncThunk(
  "weight/getWeightLast30Days",
    async (token) => {
      const res = await WeightService.getWeightLast30Days(createHead(token));
      return res.data;
    }
);

const initialState = {
  newWeight: {
    weight: '',
    time: ''
  },
  currentWeight: {
    weight: 0,
    id: '',
    date: '',
    time: ''
  },
  weightArray: []
}

export const weightSlice = createSlice({
  name: 'weight',
  initialState,
  reducers: {
    weightReset: () => {
      return initialState
    },
    updateNewWeight: (state, action) => {
      state.newWeight.weight = action.payload
    },
    updateNewTime: (state, action) => {
      state.newWeight.time = action.payload
    },
  },
  extraReducers: {
    [createWeight.fulfilled]: (state, action) => {

    },
    [getCurrentWeight.fulfilled]: (state, action) => {
      state.currentWeight = action.payload
    },
    [getWeightLast30Days.fulfilled]: (state, action) => {
      state.weightArray = action.payload
    },
  },
})

export const { weightReset, updateNewTime, updateNewWeight } = weightSlice.actions

export default weightSlice.reducer