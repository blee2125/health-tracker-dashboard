import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SleepService from "../services/SleepService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const createSleep = createAsyncThunk(
  "sleep/create",
    async (data) => {
      const res = await SleepService.create(data.data, createHead(data.userToken));
      return res.data;
    }
);

export const getAllSleep = createAsyncThunk(
  "sleep/getAll",
    async (data) => {
      const res = await SleepService.getAll(createHead(data));
      return res.data;
    }
);

export const deleteSleep = createAsyncThunk(
  "sleep/delete",
  async ({ id, userToken }) => {
    await SleepService.delete(id, createHead(userToken));
    return { id };
  }
);

export const updateSleep = createAsyncThunk(
  "sleep/update",
    async ({id, data, userToken}) => {
      const res = await SleepService.update(id, data, createHead(userToken));
      return res.data;
    }
);

export const deleteAllSleep = createAsyncThunk(
  "sleep/deleteall",
    async (data) => {
      const res = await SleepService.deleteAllSleep(createHead(data));
      return res.data;
    }
);

const initialState = {
  sleepArray: []
}

export const sleepSlice = createSlice({
  name: 'sleep',
  initialState,
  reducers: {
    sleepLogout: () => {
      return initialState
    },
  },
  extraReducers: {
    [createSleep.fulfilled]: (state, action) => {
      state.sleepArray.push(action.payload)
    },
    [getAllSleep.fulfilled]: (state, action) => {
      state.sleepArray = action.payload;
    },
    [updateSleep.fulfilled]: (state, action) => {

    },
    [deleteSleep.fulfilled]: (state, action) => ({
      ...state,
      sleepArray: state.sleepArray.filter(sleep => sleep._id !== action.payload.id)
    }),
    [deleteAllSleep.fulfilled]: () => {
      return initialState
    },
  },
})

export const { sleepLogout } = sleepSlice.actions

export default sleepSlice.reducer