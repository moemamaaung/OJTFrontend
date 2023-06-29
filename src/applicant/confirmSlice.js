import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_CONFIRM = "http://localhost:8585/api/confirm/all";

export const fetchConfirmApplicants = createAsyncThunk(
  "confirms/fetchConfirmApplicants",
  async () => {
    const response = await axios.get(GET_ALL_CONFIRM);
    console.log("In Confirm "+response.data)
    return response.data;
  }
);

const initialState = {
  confirms: [],
  status: "idle",
  error: null,
};

export const confirmSlice = createSlice({
  name: "confirms",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchConfirmApplicants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConfirmApplicants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.confirms = action.payload;
        console.log("In the all confirm success " + state.confirms);
      })
      .addCase(fetchConfirmApplicants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllConfirmApplicant = (state) => state.confirms.confirms;
export const getConfirmApplicantStatus = (state) => state.confirms.status;
export const getConfirmApplicantError = (state) => state.confirms.error;

export default confirmSlice.reducer;
