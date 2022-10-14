import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ExerciseService from "../services/ExerciseService";

export const createExercise = createAsyncThunk(
  "exercise/create",
    async (data) => {
      //console.log(data)
      const res = await ExerciseService.create(data);
      //console.log(res)
      return res.data;
    }
);

export const updateExercise = createAsyncThunk(
  "exercise/update",
    async ({id, data}) => {
      //console.log(id, data)
      const res = await ExerciseService.update(id, data);
      //console.log(res)
      return res.data;
    }
);

export const getExerciseByDate = createAsyncThunk(
  "exercise/searchByDate",
    async (data) => {
      //console.log(data)
      const res = await ExerciseService.getDate(data);
      //console.log(res)
      return res.data;
    }
);

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    exerciseArray: []
  },
  extraReducers: {
    [createExercise.fulfilled]: (state, action) => {
        console.log(action)
      // state.exerciseObject.exerciseName = action.payload.exerciseName;
      // state.id = action.payload._id
    },
    [getExerciseByDate.fulfilled]: (state, action) => {
      state.exerciseName = action.payload[0].exerciseName;
      state.id = action.payload[0]._id
    },
    // [retrieveExercise.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
    [updateExercise.fulfilled]: (state, action) => {
      state.exerciseName = action.payload.exerciseName;
      state.id = action.payload._id
    },
    // [deleteExercise.fulfilled]: (state, action) => {
    //
    // },
    // [deleteAllExercise.fulfilled]: (state, action) => {
    //   return [];
    // },
  },
})

export default exerciseSlice.reducer