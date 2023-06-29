import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const POST_NEW_Timetable = "http://localhost:8585/api/time/create/";
const GET_ALL_Timetable = "http://localhost:8585/api/time/all";
const UPDATE_Timetable = "http://localhost:8585/api/time/update/";
const DELETE_Timetable = 'http://localhost:8585/api/time/id/';


export const addNewTime = createAsyncThunk('times/addNewTime', async(data)=>{
    console.log("In the timetable "+data.programId)
    const response = await axios.post(`${POST_NEW_Timetable}${data.programId}`,data)
    return response.data;
})


export const fetchTime  =  createAsyncThunk('times/fetchTime', async () => {
    const response = await axios.get(GET_ALL_Timetable);
    return response.data;
});


export const updateTime= createAsyncThunk('times/updateTime',async (data) => {
    const response = await axios.post(`${UPDATE_Timetable}${data.programId}`,data)
    return response.data;
 })
 export const deleteTime = createAsyncThunk('times/deleteTime',async (timeId) => {
    const response = await axios.delete(`${DELETE_Timetable}${timeId}`);
    return response.data
 })

const initialState = {
    times : [],
    status : 'idle',
    error : null
}


export const timeSlice = createSlice({

    name : 'times',
    initialState,
    reducers:{
       
    },
    extraReducers(builder){
        builder
        .addCase(fetchTime.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchTime.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.times = action.payload
        })
        .addCase(fetchTime.rejected, (state, action) => {
            state.status = 'failed'

            state.error = action.error.message
        })
        .addCase(addNewTime.fulfilled,(state,action)=>{
            state.status = 'succeed'
            state.times.push(action.payload)
        })
        .addCase(addNewTime.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })

        .addCase(updateTime.fulfilled,(state,action)=>{
            const time = action.payload
            const times = state.times.filter(t => t.id !== time.id )
            state.times= [...times,time]
    })
    .addCase(deleteTime.fulfilled,(state,action)=>{
        const times = state.times.filter(t => t.id !== Number(action.payload))

        state.times = times

    })
       
    }
});

export const  selectAllTimes  = (state)=> state.times.times ;
export const  getTimeStatus = (state)=> state.times.status 
export const  getTimeError = (state)=> state.times.error 

export const selectTimeById = (state,timeId) => state.times.times.find(time => time.id === timeId)

export const selectProgramTimetableById = (state,timeId) => state.times.times.find(time => time.program.id === timeId)

export const { addTime }    = timeSlice.actions
export default timeSlice.reducer