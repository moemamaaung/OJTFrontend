import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_MARK = "http://localhost:8585/api/mark/all";
const POST_NEW_MARK = "http://localhost:8585/api/mark/create/";
const UPDATE_MARK = "http://localhost:8585/api/mark/update/";
const DELETE_MARK = "http://localhost:8585/api/mark/delete/";

export const fetchMarks = createAsyncThunk("marks/fetchMarks", async () => {
  const response = await axios.get(GET_ALL_MARK);
  return response.data;
});

export const addNewMarks = createAsyncThunk(
  "marks/addNewMarks",
  async (data) => {
    console.log("in the addmark "+data)
    const response = await axios.post(`${POST_NEW_MARK}${data.courseId}/${data.examId}`, data.mark);
    return response.data;
  }
);

export const updateMarks = createAsyncThunk(
  "marks/updateMarks",
  async (data) => {
    const response = await axios.patch(`${UPDATE_MARK}${data.courseId}/${data.examId}`, data.mark);
    return response.data;
  }
);

export const deletemarks = createAsyncThunk(
  "marks/deletemarks",
  async (markId) => {
    const response = await axios.delete(`${DELETE_MARK}${markId}`);
    return response.data;
  }
);

const initialState = {
  marks: [],
  status: "idle",
  error: null,
};

export const markSlice = createSlice({
  name: "marks",
  initialState,
  reducers: {
    addMark: (state, action) => {
      state.push(action.payload);
    },
    prepare(id, totalScores) {
      return {
        payload: {
          id,
          totalScores,
        },
      };
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchMarks.pending, (state, action) => {
        state.status = "loading....";
      })

      .addCase(fetchMarks.fulfilled, (state, action) => {
        state.status = "succeed";
        state.marks = action.payload;
      })

      .addCase(fetchMarks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(addNewMarks.fulfilled, (state, action) => {
        console.log(action.payload)
        state.status = "succeed";
        state.marks.push(action.payload);
      })

      .addCase(addNewMarks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updateMarks.fulfilled, (state, action) => {
        const mark = action.payload;
        const marks = state.marks.filter((c) => c.id !== mark.id);
        state.marks = [...marks, mark];
      })

      .addCase(deletemarks.fulfilled, (state, action) => {
        const mark = state.marks.filter(
          (c) => c.id !== Number(action.payload)
        );

        state.marks = mark;
      });
  },
});


export const selectAllMarks = (state) => state.marks.marks;
export const getMarkStatus = (state) => state.marks.status;
export const getMarkError = (state) => state.marks.error;
export const selectMarkById = (state, markId) =>
state.marks.marks.find((mark) => mark.id === markId);

export const selectUserMarkById = (state,markId) => state.marks.marks.find(mark => mark.exam.id === markId)

export const { addMark } = markSlice.actions;
export default markSlice.reducer;
