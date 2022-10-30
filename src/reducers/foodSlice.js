import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FoodService from "../services/FoodService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const createFood = createAsyncThunk(
  "food/create",
    async (data) => {
      const res = await FoodService.create(data.foodObject, createHead(data.userToken));
      return res.data;
    }
);

export const getAllFood = createAsyncThunk(
  "food/getAll",
    async (data) => {
      const res = await FoodService.getAll(createHead(data));
      return res.data;
    }
);

export const deleteFood = createAsyncThunk(
  "food/delete",
  async ({ id, userToken }) => {
    await FoodService.delete(id, createHead(userToken));
    return { id };
  }
);

export const updateFood = createAsyncThunk(
  "food/update",
    async ({id, data, userToken}) => {
      const res = await FoodService.update(id, data, createHead(userToken));
      return res.data;
    }
);

export const getFoodByDate = createAsyncThunk(
  "food/searchByDate",
    async (data) => {
      const res = await FoodService.searchByDate({date: data.date}, createHead(data.token));
      return res.data;
    }
);

export const getFoodToday = createAsyncThunk(
  "food/getFoodToday",
    async (data) => {
      const res = await FoodService.getFoodToday({date: data.date}, createHead(data.token));
      return res.data;
    }
);

const initialState = {
  foodArray: [],
  foodByDayArray: [],
  foodTodayArray: [],
  searchDate: ''
}

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    foodLogout: () => {
      return initialState
    },
    updateSearchDate: (state, action) => {
      state.searchDate = action.payload
    }
  },
  extraReducers: {
    [createFood.fulfilled]: (state, action) => {
      
    },
    [getFoodByDate.fulfilled]: (state, action) => {
      state.foodByDayArray = action.payload;
    },
    [getFoodToday.fulfilled]: (state, action) => {
      state.foodTodayArray = action.payload;
    },
    [getAllFood.fulfilled]: (state, action) => {
      state.foodArray = action.payload;
    },
    [updateFood.fulfilled]: (state, action) => {

    },
    [deleteFood.fulfilled]: (state, action) => ({
      ...state,
      foodArray: state.foodArray.filter(food => food._id !== action.payload.id)
    }),
  },
})

export const { foodLogout, updateSearchDate } = foodSlice.actions

export default foodSlice.reducer