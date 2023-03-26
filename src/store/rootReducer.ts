import { combineReducers } from "@reduxjs/toolkit";
import repositoriesSlice from "./repositoriesSlice/repositoriesSlice";


const rootReducer = combineReducers({
  repositories: repositoriesSlice,
});

export default rootReducer;
