import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_EXP = 'http://localhost:8585/api/exp/all'
const POST_NEW_EXP = 'http://localhost:8585/api/exp/create/'
const DELETE_EXP = 'http://localhost:8585/api/exp/delete/'

export const fetchExps = createAsyncThunk('exps/fetchExps',async()=>{
    const response = await axios.get(GET_ALL_EXP)
    return response.data
})

export const addNewExp = createAsyncThunk('exps/addNewEdu',async(data)=>{
    const response = await axios.post(`${POST_NEW_EXP}${data.applicantId}`,data.exp)
    return response.data
})

export const deleteExp = createAsyncThunk('exps/deleteExp',async(id)=>{
    const response = await axios.delete(`${DELETE_EXP}${id}`)
    return response.data
})

const initialState={
    exps : [],
    status:'idle',
    error:null
}

export const experienceSlice = createSlice({
    name:'exps',
    initialState,
    reducers:{ },
    extraReducers(builder){
        builder
        .addCase(fetchExps.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchExps.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.exps = action.payload
        })
        .addCase(fetchExps.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewExp.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            console.log("Exp Status : "+state.status)
            state.exps.push(action.payload)
        })
        .addCase(addNewExp.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }

})

export const selectAllExps = (state) => state.exps.exps
export const getExpStatus = (state) => state.exps.status
export const getExpError = (state) => state.exps.error

export const {addExp} = experienceSlice.actions
export default experienceSlice.reducer