import {createSlice} from "@reduxjs/toolkit";
import {getRepositories} from "./thunks";
import {IState, Status} from "./types";

const initialState: IState = {
  repositories: null,
  error: null,
  status: Status.idle,
};

export const repositoriesSlice = createSlice<IState, {}>({
  name: "repositoriesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepositories.pending, (state) => {
      state.status = Status.loading;
      state.error = null;
    });
    builder.addCase(getRepositories.fulfilled, (state, { payload }) => {
      state.status = Status.completed;
      state.error = null;
      state.repositories = payload;
    });
    builder.addCase(getRepositories.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }
      state.status = Status.idle;
    });
  },
});

export default repositoriesSlice.reducer;
