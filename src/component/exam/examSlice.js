import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_EXAM = "http://localhost:8585/api/exam/all";
const ADD_NEW_EXAM = "http://localhost:8585/api/exam/create";
const UPDATE_EXAM = "http://localhost:8585/api/exam/update";
const DELETE_EXAM = "http://localhost:8585/api/exam/id/";

export const fecthExams = createAsyncThunk('exams/fecthExams',async () => {
    const response = await axios.get(GET_ALL_EXAM);
    return response.data
} )

export const addNewExam = createAsyncThunk('exams/addNewExam' , async(data) => {
    const response = await axios.post(ADD_NEW_EXAM,data);
    return response.data
})

export const updateExam = createAsyncThunk ('exams/updateExam' , async(data) => {
    const response = await axios.patch(UPDATE_EXAM,data);
    return response.data
})

export const deleteExam = createAsyncThunk ('exams/deleteExam' , async(examId) => {
    const response = await axios.delete(`${DELETE_EXAM}${examId}`)
    return response.data
} )


const initialState = {
    exams : [],
    status : "idle",
    error : null

}
export const examSlice = createSlice({
    name : "exams",
    initialState,
    reducers : {
        
    },
    extraReducers(builder){
        builder
        .addCase(fecthExams.pending,(state) => {
            state.status = "loading"
        })
        .addCase(fecthExams.fulfilled,(state,action) => {
            state.status = "succeeded"
            state.exams = action.payload;
        })
        .addCase(fecthExams.rejected,(state,action) => {
            state.status = "failed"
            state.error = action.error.message;
        })
        .addCase(addNewExam.fulfilled,(state,action) => {
            state.status = "succeeded"
            state.exams.push(action.payload)
        })
        .addCase(addNewExam.rejected,(state,action) => {
            state.status = "failed"
            state.error = action.error.message;
        })

        .addCase(updateExam.fulfilled,(state,action) => {
            const exam = action.payload;
            const exams = state.exams.filter((c) => c.id !== exam.id)
            state.exams = [...exams , exam]  
        })
        .addCase(deleteExam.fulfilled,(state,action) => {
            const exam = state.exams.filter((c) => c.id !== Number(action.payload))
            state.exams = exam;
        })
    }
})

export const selectAllExams = (state) => state.exams.exams
export const getExamError = (state) => state.exams.error
export const getExamStatus = (state) => state.exams.status
export const selectExamById = (state, examId) =>
state.exams.exams.find((exam) => exam.id === examId);


export default examSlice.reducer;