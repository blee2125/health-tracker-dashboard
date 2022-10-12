import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WaterService from "../services/WaterService";

export const createWater = createAsyncThunk(
  "water/create",
    async (data) => {
      //console.log(data)
      const res = await WaterService.create(data);
      console.log(res)
      return res.data;
    }
);

export const updateWater = createAsyncThunk(
  "water/update",
    async ({id, data}) => {
      //console.log(id, data)
      const res = await WaterService.update(id, data);
      //console.log(res)
      return res.data;
    }
);

export const waterSlice = createSlice({
  name: 'water',
  initialState: {
    glasses: 0,
    id: null
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
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
    // [retrieveWater.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
    [updateWater.fulfilled]: (state, action) => {
      //const index = state.findIndex(water => water.id === action.payload.id);
      // state[index] = {
      //   ...state[index],
      //   ...action.payload,
      // };
      //console.log(action.payload.glasses)
      state.glasses = action.payload.glasses;
      state.id = action.payload._id
    },
    // [deleteWater.fulfilled]: (state, action) => {
//
    // },
    // [deleteAllWater.fulfilled]: (state, action) => {
    //   return [];
    // },
    // [findWaterByDate.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = waterSlice.actions

export default waterSlice.reducer