import { createAsyncThunk } from "@reduxjs/toolkit";
import {IErrors} from "./types";
import API from "../../api"

export const getRepositories = createAsyncThunk<
  any,
  { repositoriesName: string, pageNumber: number, },
  { rejectValue: IErrors }
>(
  "patientReportsSlice/getPatientReports",
  async (payload, { rejectWithValue }) => {
    try {
      return API.getRepositories(payload.repositoriesName, payload.pageNumber)
    } catch (error) {
      const { data } = error as {
        data: IErrors;
      };
      return rejectWithValue({ ...data });
    }
  }
);
