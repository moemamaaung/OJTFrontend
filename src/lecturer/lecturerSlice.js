import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_LECTURERS = "http://localhost:8585/api/lecturer/all"
const CREATE_LECTURERS = "http://localhost:8585/api/lecturer/create"
const UPDATE_LECTURERS = "http://localhost:8585/api/lecturer/update"
const DELETE_LECTURERS = "http://localhost:8585/api/lecturer/delete/"

export const fetchLecturers = createAsyncThunk(
    "lecturers/fetchLecturers",
    async () => {
      const response = await axios.get(GET_ALL_LECTURERS);
      return response.data;
    }
  );

  export const addNewLecturers = createAsyncThunk(
    "lecturers/addNewLecturers",
    async (data) => {
      const response = await axios.post(CREATE_LECTURERS,data);
      return response.data;
    }
  );

  export const updateLecturers = createAsyncThunk(
    "lecturers/updateLecturers",
    async (data) => {
      const response = await axios.patch(UPDATE_LECTURERS,data);
      return response.data;
    }
  );

  export const deleteLecturer = createAsyncThunk(
    "lecturers/deleteLecturer",
    async (lecturerId) => {
      const response = await axios.delete(`${DELETE_LECTURERS}${lecturerId}`);
      return response.data;
    }
  );

  const initialState = {
    lecturers:[],
    status : "idle",
    error:null,
  }

  export const lecturerSlice = createSlice({
    name  : "lecturers",
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(fetchLecturers.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchLecturers.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.lecturers = action.payload;
          })
          .addCase(fetchLecturers.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })

          .addCase(addNewLecturers.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.lecturers.push(action.payload);
          })
          .addCase(addNewLecturers.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })

          .addCase(updateLecturers.fulfilled, (state, action) => {
            const lecturer = action.payload;
            const lecturers = state.lecturers.filter((c) => c.id !== lecturer.id);
            state.lecturers = [...lecturers, lecturer];
          })

          .addCase(deleteLecturer.fulfilled, (state, action) => {
            const lecturer = state.lecturers.filter(
              (c) => c.id !== Number(action.payload)
            );
    
            state.lecturers = lecturer;
          });
    }
  })

  export const getAllLecturers = (state) => state.lecturers.lecturers
 export const getLecturerStatus = (state) => state.lecturers.status
 export const getLecturerError = (state) => state.lecturers.error

 export const selectLecturerById = (state, lecturerId) => state.lecturers.lecturers.find((lecturer) => lecturer.id === lecturerId);

 export default lecturerSlice.reducer

