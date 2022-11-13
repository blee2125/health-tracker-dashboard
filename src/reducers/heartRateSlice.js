import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HeartRateService from "../services/HeartRateService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const createHeartRate = createAsyncThunk(
  "heartrate/create",
    async (data) => {
      const res = await HeartRateService.create(data.data, createHead(data.userToken));
      return res.data;
    }
);

export const getAllHeartRate = createAsyncThunk(
  "heartrate/getAll",
    async (data) => {
      const res = await HeartRateService.getAll(createHead(data));
      return res.data;
    }
);

export const deleteHeartRate = createAsyncThunk(
  "heartrate/delete",
  async ({ id, userToken }) => {
    await HeartRateService.delete(id, createHead(userToken));
    return { id };
  }
);

export const updateHeartRate = createAsyncThunk(
  "heartrate/update",
    async ({id, data, userToken}) => {
      const res = await HeartRateService.update(id, data, createHead(userToken));
      return res.data;
    }
);

export const getHeartRateByDate = createAsyncThunk(
  "heartrate/searchByDate",
    async (data) => {
      const res = await HeartRateService.searchByDate({date: data.date}, createHead(data.token));
      return res.data;
    }
);

export const deleteAllHeartRate = createAsyncThunk(
  "heartrate/deleteall",
    async (data) => {
      const res = await HeartRateService.deleteAllHeartRate(createHead(data));
      return res.data;
    }
);

const initialState = {
  heartRateArray: []
}

export const heartRateSlice = createSlice({
  name: 'heartrate',
  initialState,
  reducers: {
    heartRateLogout: () => {
      return initialState
    },
  },
  extraReducers: {
    [createHeartRate.fulfilled]: (state, action) => {
      state.heartRateArray.push(action.payload)
    },
    [getHeartRateByDate.fulfilled]: (state, action) => {
      state.heartRateArray = action.payload;
    },
    [getAllHeartRate.fulfilled]: (state, action) => {
      state.heartRateArray = action.payload;
    },
    [updateHeartRate.fulfilled]: (state, action) => {

    },
    [deleteHeartRate.fulfilled]: (state, action) => ({
      ...state,
      heartRateArray: state.heartRateArray.filter(hr => hr._id !== action.payload.id)
    }),
    [deleteAllHeartRate.fulfilled]: () => {
      return initialState
    },
  },
})

export const { heartRateLogout } = heartRateSlice.actions

export default heartRateSlice.reducer