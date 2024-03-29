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

export const getExerciseByDate = createAsyncThunk(
  "exercise/searchByDate",
    async (data) => {
      const res = await ExerciseService.searchByDate({date: data.date}, createHead(data.token));
      return res.data;
    }
);

export const getExerciseToday = createAsyncThunk(
  "exercise/getExerciseToday",
    async (data) => {
      const res = await ExerciseService.getExerciseToday({date: data.date}, createHead(data.token));
      return res.data;
    }
);

export const deleteAllExercise = createAsyncThunk(
  "exercise/deleteall",
    async (data) => {
      const res = await ExerciseService.deleteAllExercise(createHead(data));
      return res.data;
    }
);

const initialState = {
  exerciseArray: [],
  exerciseByDayArray: [],
  exerciseTodayArray: [],  
  searchDate: ''
}

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    exerciseLogout: () => {
      return initialState
    },
    updateSearchDate: (state, action) => {
      state.searchDate = action.payload
    }
  },
  extraReducers: {
    [createExercise.fulfilled]: (state, action) => {

    },
    [getExerciseByDate.fulfilled]: (state, action) => {
      state.exerciseByDayArray = action.payload;
    },
    [getAllExercises.fulfilled]: (state, action) => {
      state.exerciseArray = action.payload;
    },
    [getExerciseToday.fulfilled]: (state, action) => {
      state.exerciseTodayArray = action.payload;
    },
    [updateExercise.fulfilled]: (state, action) => {
      const dayindex = state.exerciseByDayArray.findIndex((exercise) => {
        return exercise._id === action.payload._id
      })
      state.exerciseByDayArray[dayindex] = action.payload
      
      const allindex = state.exerciseArray.findIndex((exercise) => {
        return exercise._id === action.payload._id
      })
      state.exerciseArray[allindex] = action.payload

      const todayindex = state.exerciseTodayArray.findIndex((exercise) => {
        return exercise._id === action.payload._id
      })
      state.exerciseTodayArray[todayindex] = action.payload
    },
    [deleteExercise.fulfilled]: (state, action) => ({
      ...state,
      exerciseArray: state.exerciseArray.filter(exercise => exercise._id !== action.payload.id)
    }),
    [deleteAllExercise.fulfilled]: () => {
      return initialState
    },
  },
})

export const { exerciseLogout, updateSearchDate } = exerciseSlice.actions

export default exerciseSlice.reducer