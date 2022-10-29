import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../services/UserService";

const createHead = (token) => {
  return {
    headers: { "x-auth-token": token}
  }
}

export const loginUser = createAsyncThunk(
  "user/login",
    async (data) => {
      const res = await UserService.login(data);
      return res.data;
    }
);

export const createUser = createAsyncThunk(
  "user/create",
    async (data) => {
      const res = await UserService.create(data);
      return res.data;
    }
);

export const getUserData = createAsyncThunk(
    "user/getUser",
      async (user) => {
        const res = await UserService.getUser(user);
        return res.data;
      }
);

export const editPassword = createAsyncThunk(
  "user/changepassword",
    async (data) => {
      const res = await UserService.editPassword(data, createHead(data.userToken));
      return res.data;
    }
);

export const addHeight = createAsyncThunk(
  "user/addheight",
    async (data) => {
      const res = await UserService.addHeight(data, createHead(data.userToken));
      return res.data;
    }
);

const initialState = {
  isAuthenticated: false,
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogout: () => {
      return initialState
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    [getUserData.fulfilled]: (state, action) => {

    },
    [createUser.fulfilled]: (state, action) => {
        console.log('create userslice')
    },
    [addHeight.fulfilled]: (state, action) => {
      state.user.height = action.payload.user.height
      state.isAuthenticated = true
    },
  },
})

export const { userLogout } = userSlice.actions

export default userSlice.reducer