import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HealthGoalService from "../services/HealthGoalService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const createHealthGoal = createAsyncThunk(
  "healthgoal/create",
    async (data) => {
      const res = await HealthGoalService.create(data.healthGoalObject, createHead(data.userToken));
      return res.data;
    }
);

export const getAllHealthGoal = createAsyncThunk(
  "healthgoal/getAll",
    async (data) => {
      const res = await HealthGoalService.getAll(createHead(data));
      return res.data;
    }
);

export const deleteHealthGoal = createAsyncThunk(
  "healthgoal/delete",
  async ({ id, userToken }) => {
    await HealthGoalService.delete(id, createHead(userToken));
    return { id };
  }
);

export const updateHealthGoal = createAsyncThunk(
  "healthgoal/update",
    async ({id, data, userToken}) => {
      const res = await HealthGoalService.update(id, data, createHead(userToken));
      return res.data;
    }
);

export const getHealthGoalByDate = createAsyncThunk(
  "healthgoal/searchByDate",
    async (data) => {
      const res = await HealthGoalService.searchByDate({date: data.date}, createHead(data.token));
      return res.data;
    }
);

export const deleteAllHealthGoal = createAsyncThunk(
  "healthgoal/deleteall",
    async (data) => {
      const res = await HealthGoalService.deleteAllHealthGoals(createHead(data));
      return res.data;
    }
);

const initialState = {
  healthGoalArray: [],
  waterGoal: {goal: ''},
  foodGoal: {goal: ''}
}

export const healthGoalSlice = createSlice({
  name: 'healthGoal',
  initialState,
  reducers: {
    healthGoalLogout: () => {
      return initialState
    },
  },
  extraReducers: {
    [createHealthGoal.fulfilled]: (state, action) => {

    },
    [getHealthGoalByDate.fulfilled]: (state, action) => {
      state.healthGoalArray = action.payload;
    },
    [getAllHealthGoal.fulfilled]: (state, action) => {
      state.healthGoalArray = action.payload;
      state.waterGoal = action.payload.filter(goal => goal.category === 'Water')[0]
      state.foodGoal = action.payload.filter(goal => goal.category === 'Food')[0]
    },
    [updateHealthGoal.fulfilled]: (state, action) => {

    },
    [deleteHealthGoal.fulfilled]: (state, action) => ({
      ...state,
      healthGoalArray: state.healthGoalArray.filter(goal => goal._id !== action.payload.id)
    }),
    [deleteAllHealthGoal.fulfilled]: () => {
      return initialState
    },
  },
})

export const { healthGoalLogout } = healthGoalSlice.actions

export default healthGoalSlice.reducer