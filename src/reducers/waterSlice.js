import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WaterService from "../services/WaterService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const createWater = createAsyncThunk(
  "water/create",
    async (data) => {
      const res = await WaterService.create(data.data, createHead(data.token));
      return res.data;
    }
);

export const updateWater = createAsyncThunk(
  "water/update",
    async (data) => {
      const res = await WaterService.update(data.id, data.data, createHead(data.token));
      return res.data;
    }
);

export const getWaterByDate = createAsyncThunk(
  "water/searchByDate",
    async (data) => {
      const res = await WaterService.getDate({data: data.date}, createHead(data.token));
      return res.data;
    }
);

export const getSevenDays = createAsyncThunk(
  "water/getSevenDays",
    async (data) => {
      const res = await WaterService.getSevenDays(createHead(data));
      return res.data;
    }
);

const initialState = {
  glasses: 0,
  id: null,
  waterArray7days: []
}

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    waterReset: () => {
      return initialState
    },
    increment: (state) => {
      state.glasses += 1
    },
    decrement: (state) => {
      state.glasses -= 1
    },
    incrementByAmount: (state, action) => {
      state.glasses += action.payload
    },
  },
  extraReducers: {
    [createWater.fulfilled]: (state, action) => {
      state.glasses = action.payload.glasses;
      state.id = action.payload._id
    },
    [getWaterByDate.fulfilled]: (state, action) => {
      state.glasses = action.payload[0].glasses;
      state.id = action.payload[0]._id
    },
    [updateWater.fulfilled]: (state, action) => {
      state.glasses = action.payload.glasses;
      state.id = action.payload._id
    },
    [getSevenDays.fulfilled]: (state, action) => {
      //console.log(action.payload)
      state.waterArray7days = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, waterReset } = waterSlice.actions

export default waterSlice.reducer