import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WaterService from "../services/WaterService";

export const createWater = createAsyncThunk(
    "water/create",
    async (data) => {
        console.log(data)
      const res = await WaterService.create(data);
      console.log(res)
      return res.data;
    }
  );

export const waterSlice = createSlice({
  name: 'water',
  initialState: {
    glasses: 5
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
      state.push(action.payload);
    },
    // [retrieveTutorials.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
    // [updateTutorial.fulfilled]: (state, action) => {
    //   const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
    //   state[index] = {
    //     ...state[index],
    //     ...action.payload,
    //   };
    // },
    // [deleteTutorial.fulfilled]: (state, action) => {
    //   let index = state.findIndex(({ id }) => id === action.payload.id);
    //   state.splice(index, 1);
    // },
    // [deleteAllTutorials.fulfilled]: (state, action) => {
    //   return [];
    // },
    // [findTutorialsByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = waterSlice.actions

export default waterSlice.reducer