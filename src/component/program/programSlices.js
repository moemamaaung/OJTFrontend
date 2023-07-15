import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_NEW_Program = "http://localhost:8585/api/program/create/";
const GET_ALL_Program = "http://localhost:8585/api/program/all";
const UPDATE_Program = "http://localhost:8585/api/program/update/";
const DELETE_Program = 'http://localhost:8585/api/program/id/';

export const addNewProgram = createAsyncThunk('programs/addNewProgram', async(data)=>{
    console.log("IDDDDDDDDDDDDDDDDDDDD  "+data.ACADEMICYEAR_ID)
    const response = await axios.post(`${POST_NEW_Program}${data.ACADEMICYEAR_ID}`,data)
    console.log("Create SLice: "+response.data)
    return response.data;
})

export const fetchPrograms= createAsyncThunk('programs/fetchPrograms', async () => {
    const response = await axios.get(GET_ALL_Program);
    return response.data;
});



export const updateProgram= createAsyncThunk('programs/updateProgram',async (data) => {
    const response = await axios.patch(`${UPDATE_Program}${data.ACADEMICYEAR_ID}`,data)
    return response.data;
 })

 export const deleteProgram = createAsyncThunk('programs/deleteProgram',async (programId) => {
    const response = await axios.delete(`${DELETE_Program}${programId}`);
    return response.data
 })
const initialState = {
    programs : [],
    status : 'idle',
    error : null
}


export const programSlices = createSlice({

    name : 'programs',
    initialState,
    reducers: { },
    
    extraReducers(builder){
        builder
        .addCase(fetchPrograms.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPrograms.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.programs = action.payload
        })
        .addCase(fetchPrograms.rejected, (state, action) => {
            state.status = 'failed'

            state.error = action.error.message
        })
        .addCase(addNewProgram.fulfilled,(state,action)=>{
            state.status = 'succeed'
            state.programs.push(action.payload)
        })
        .addCase(addNewProgram.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })

        .addCase(updateProgram.fulfilled,(state,action)=>{
            const program = action.payload
            const programs = state.programs.filter(c => c.id !== program.id )
            state.programs= [...programs,program]
    })
    .addCase(deleteProgram.fulfilled,(state,action)=>{
        const programs = state.programs.filter(c => c.id !== Number(action.payload))

        state.programs = programs

    })
    }
});

export const  selectAllPrograms  = (state)=> state.programs.programs ;
export const  getProgramStatus = (state)=> state.programs.status 
export const  getProgramError = (state)=> state.programs.error 

export const selectProgramById = (state,programId) => state.programs.programs.find(program => program.id === programId)
export const selectProgramAByName = (state,programName) => state.programs.programs.find(program => program.programName === programName)
export const { addProgram }   = programSlices.actions
export default programSlices.reducer