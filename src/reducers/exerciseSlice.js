import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ExerciseService from "../services/ExerciseService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const createExercise = createAsyncThunk(
  "exercise/create",
    async (data) => {
      const res = await ExerciseService.create(data.exerciseObject, createHead(data.userToken));
      return res.data;
    }
);

export const getAllExercises = createAsyncThunk(
  "exercise/getAll",
    async (data) => {
      const res = await ExerciseService.getAll(createHead(data));
      return res.data;
    }
);

export const deleteExercise = createAsyncThunk(
  "exercise/delete",
  async ({ id, userToken }) => {
    await ExerciseService.delete(id, createHead(userToken));
    return { id };
  }
);

export const updateExercise = createAsyncThunk(
  "exercise/update",
    async ({id, data, userToken}) => {
      const res = await ExerciseService.update(id, data, createHead(userToken));
      return res.data;
    }
);

// export const getExerciseByDate = createAsyncThunk(
//   "exercise/searchByDate",
//     async (data) => {
//       //console.log(data)
//       const res = await ExerciseService.getDate(data);
//       //console.log(res)
//       return res.data;
//     }
// );

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    exerciseArray: []
  },
  extraReducers: {
    [createExercise.fulfilled]: (state, action) => {
      // state.exerciseObject.exerciseName = action.payload.exerciseName;
      // state.id = action.payload._id
    },
    [getAllExercises.fulfilled]: (state, action) => {
      state.exerciseArray = action.payload;
    },
    [updateExercise.fulfilled]: (state, action) => {
      // state.exerciseName = action.payload.exerciseName;
      // state.id = action.payload._id
    },
    [deleteExercise.fulfilled]: (state, action) => ({
      ...state,
      exerciseArray: state.exerciseArray.filter(exercise => exercise._id !== action.payload.id)
    }),
  },
})

export default exerciseSlice.reducer