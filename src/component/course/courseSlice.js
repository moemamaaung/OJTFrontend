import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_COURSE = "http://localhost:8585/api/course/all";
const POST_NEW_COURSE = "http://localhost:8585/api/course/create/";
const UPDATE_COURSE = "http://localhost:8585/api/course/update/";
const DELETE_COURSE = "http://localhost:8585/api/course/id/";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios.get(GET_ALL_COURSE);
    return response.data;
  }
);

export const addNewCourse = createAsyncThunk(
  "courses/addNewCourse",
  async (data) => {
    const response = await axios.post(`${POST_NEW_COURSE}${data.programId}`, data);
    return response.data;
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async (data) => {
    const response = await axios.patch(`${UPDATE_COURSE}${data.programId}`, data);
    return response.data;
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (courseId) => {
    const response = await axios.delete(`${DELETE_COURSE}${courseId}`);
    return response.data;
  }
);

const initialState = {
  courses: [],
  status: "idle",
  error: null,
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload);
    },
    prepare(id, subjectName, description) {
      return {
        payload: {
          id,
          subjectName,
          description,
        },
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(addNewCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses.push(action.payload);
      })
      .addCase(addNewCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updateCourse.fulfilled, (state, action) => {
        const course = action.payload;
        const courses = state.courses.filter((c) => c.id !== course.id);
        state.courses = [...courses, course];
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        const course = state.courses.filter(
          (c) => c.id !== Number(action.payload)
        );

        state.courses = course;
      });
  },
});

export const selectAllCourses = (state) => state.courses.courses;
export const getCourseStatus = (state) => state.courses.status;
export const getCourseError = (state) => state.courses.error;

export const selectCourseById = (state, courseId) =>
state.courses.courses.find((course) => course.id === courseId);

export const selectProgramCourseById = (state,courseId) => state.courses.courses.find(course => course.program.id === courseId)

export const { addCourse } = courseSlice.actions;
export default courseSlice.reducer;
