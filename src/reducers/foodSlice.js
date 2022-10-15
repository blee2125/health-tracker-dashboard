import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FoodService from "../services/FoodService";

export const createFood = createAsyncThunk(
  "food/create",
    async (data) => {
      //console.log(data)
      const res = await FoodService.create(data);
      //console.log(res)
      return res.data;
    }
);

export const getAllFood = createAsyncThunk(
  "food/getAll",
    async () => {
      const res = await FoodService.getAll();
      return res.data;
    }
);

export const deleteFood = createAsyncThunk(
  "food/delete",
  async ({ id }) => {
    await FoodService.delete(id);
    return { id };
  }
);

export const updateFood = createAsyncThunk(
  "food/update",
    async ({id, data}) => {
      //console.log(id, data)
      const res = await FoodService.update(id, data);
      //console.log(res)
      return res.data;
    }
);

export const getFoodByDate = createAsyncThunk(
  "food/searchByDate",
    async (data) => {
      //console.log(data)
      const res = await FoodService.getDate(data);
      //console.log(res)
      return res.data;
    }
);

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    foodArray: []
  },
  extraReducers: {
    [createFood.fulfilled]: (state, action) => {
        console.log(action)

    },
    [getAllFood.fulfilled]: (state, action) => {
      //console.log(action)
      state.foodArray = action.payload;
    },
    [getFoodByDate.fulfilled]: (state, action) => {

    },
    // [retrieveFood.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
    [updateFood.fulfilled]: (state, action) => {

    },
    [deleteFood.fulfilled]: (state, action) => ({
      ...state,
      foodArray: state.foodArray.filter(food => food._id !== action.payload.id)
    }),
    // [deleteAllFood.fulfilled]: (state, action) => {
    //   return [];
    // },
  },
})

export default foodSlice.reducer