import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../services/UserService";

export const loginUser = createAsyncThunk(
  "user/login",
    async (data) => {
      //console.log(data)
      const res = await UserService.login(data);
      //console.log(res)
      return res.data;
    }
);

export const createUser = createAsyncThunk(
  "user/create",
    async (data) => {
      //console.log(data)
      const res = await UserService.create(data);
      //console.log(res)
      return res.data;
    }
);

export const getUserData = createAsyncThunk(
    "user/getUser",
      async (user) => {
        //console.log(user)
        const res = await UserService.getUser(user);
        return res.data;
      }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    userLogout: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    [getUserData.fulfilled]: (state, action) => {
      //console.log('get userslice')
      //console.log(action.payload)
    },
    [createUser.fulfilled]: (state, action) => {
        console.log('create userslice')
    },
  },
})

export const { userLogout } = userSlice.actions

export default userSlice.reducer