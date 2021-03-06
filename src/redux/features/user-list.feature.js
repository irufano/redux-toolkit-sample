import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  errorMessage: null,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  let url = `https://jsonplaceholder.typicode.com/users`;
  let response = await axios.get(url);
  return response.data;
});

const userListSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = "Oops! Something wrong";
      });
  },
});

export default userListSlice.reducer;