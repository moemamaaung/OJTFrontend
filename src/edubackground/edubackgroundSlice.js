import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_EDU = 'http://localhost:8585/api/edu/all'
const POST_NEW_EDU = 'http://localhost:8585/api/edu/create/'
const DELETE_EDU = 'http://localhost:8585/api/edu/delete/'

export const fetchEdus = createAsyncThunk('edus/fetchEdus',async()=> {
    const response = await axios.get(GET_ALL_EDU)
    return response.data
})
export const addNewEdu = createAsyncThunk('edus/addNewEdu',async (data)=>{
   console.log("This is Applicant"+data.applicantId)
   console.log("This is Edu"+data.edu)
    const response = await axios.post(`${POST_NEW_EDU}${data.applicantId}`,data.edu)

    
   // const response = await axios.post(POST_NEW_EDU,data)
    return response.data
})
export const deleteEdu = createAsyncThunk('edus/deleteEdu',async(id)=>{
    const response = await axios.delete(`${DELETE_EDU}${id}`)
    return response.data
})
const initialState={
    edus : [],
    status:'idle',
    error:null

}

export const edubackgroundSlice = createSlice({
    name:'edus',
    initialState,
    reducers:{ },
    extraReducers(builder){
        builder
        .addCase(fetchEdus.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchEdus.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.edus = action.payload
        })
        .addCase(fetchEdus.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewEdu.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.edus.push(action.payload)
        }).addCase(addNewEdu.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        }).addCase(deleteEdu.fulfilled,(state,action)=>{
            const edus = state.edus.filter(a => a.id !== Number(action.payload))
            state.edus = edus
        })
    }

})


export const selectAllEdus = (state) => state.edus.edus
export const getEdusStatus = (state) => state.edus.status
export const getEdusError = (state) => state.edus.error

export const {addEdu} = edubackgroundSlice.actions
export default edubackgroundSlice.reducer