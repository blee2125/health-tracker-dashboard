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

const initialState = {
  foodArray: []
}

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    foodLogout: () => {
      return initialState
    },
  },
  extraReducers: {
    [createFood.fulfilled]: (state, action) => {
      
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

export const { foodLogout } = foodSlice.actions

export default foodSlice.reducer