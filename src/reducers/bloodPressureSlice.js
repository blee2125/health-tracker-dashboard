import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BloodPressureService from "../services/BloodPressureService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const createBloodPressure = createAsyncThunk(
  "bloodpressure/create",
    async (data) => {
      const res = await BloodPressureService.create(data.data, createHead(data.userToken));
      return res.data;
    }
);

export const getAllBloodPressure = createAsyncThunk(
  "bloodpressure/getAll",
    async (data) => {
      const res = await BloodPressureService.getAll(createHead(data));
      return res.data;
    }
);

export const deleteBloodPressure = createAsyncThunk(
  "bloodpressure/delete",
  async ({ id, userToken }) => {
    await BloodPressureService.delete(id, createHead(userToken));
    return { id };
  }
);

export const updateBloodPressure = createAsyncThunk(
  "bloodpressure/update",
    async ({id, data, userToken}) => {
      const res = await BloodPressureService.update(id, data, createHead(userToken));
      return res.data;
    }
);

export const getBloodPressureByDate = createAsyncThunk(
  "bloodpressure/searchByDate",
    async (data) => {
      const res = await BloodPressureService.searchByDate({date: data.date}, createHead(data.token));
      return res.data;
    }
);

export const deleteAllBloodPressure = createAsyncThunk(
  "bloodpressure/deleteall",
    async (data) => {
      const res = await BloodPressureService.deleteAllBloodPressure(createHead(data));
      return res.data;
    }
);

const initialState = {
  bloodPressureArray: []
}

export const bloodPressureSlice = createSlice({
  name: 'bloodpressure',
  initialState,
  reducers: {
    bloodPressureLogout: () => {
      return initialState
    },
  },
  extraReducers: {
    [createBloodPressure.fulfilled]: (state, action) => {
      state.bloodPressureArray.push(action.payload)
    },
    [getBloodPressureByDate.fulfilled]: (state, action) => {
      state.bloodPressureArray = action.payload;
    },
    [getAllBloodPressure.fulfilled]: (state, action) => {
      state.bloodPressureArray = action.payload;
    },
    [updateBloodPressure.fulfilled]: (state, action) => {

    },
    [deleteBloodPressure.fulfilled]: (state, action) => ({
      ...state,
      bloodPressureArray: state.bloodPressureArray.filter(bp => bp._id !== action.payload.id)
    }),
    [deleteAllBloodPressure.fulfilled]: () => {
      return initialState
    },
  },
})

export const { bloodPressureLogout } = bloodPressureSlice.actions

export default bloodPressureSlice.reducer