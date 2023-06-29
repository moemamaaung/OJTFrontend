import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_Academicyear = "http://localhost:8585/api/academicyear/all";
const POST_NEW_Academicyear = "http://localhost:8585/api/academicyear/create";
const UPDATE_Academicyear = "http://localhost:8585/api/academicyear/update";
const DELETE_Academicyear = 'http://localhost:8585/api/academicyear/id/';

export const addNewAcademicYear = createAsyncThunk('academicyears/addNewAcademicYear', async(data)=>{
    const response = await axios.post(POST_NEW_Academicyear,data)
    return response.data;
})
export const fetchAcademicyears  =  createAsyncThunk('academicyears/fetchAcademicyears', async () => {
    const response = await axios.get(GET_ALL_Academicyear);
    return response.data;
});



export const updateAcademicYear= createAsyncThunk('academicyears/updateAcademicYear',async (data) => {
    const response = await axios.patch(UPDATE_Academicyear,data)
    return response.data;
 })
 export const deleteAcademicYear = createAsyncThunk('academicyears/deleteAcademicYear',async (academicyearId) => {
    const response = await axios.delete(`${DELETE_Academicyear}${academicyearId}`);
    return response.data
 })

const initialState = {
    academicyears : [],
    status : 'idle',
    error : null
}


export const academicyearSlices = createSlice({

    name : 'academicyears',
    initialState,
    reducers:{
       
    },
    extraReducers(builder){
        builder
        .addCase(fetchAcademicyears.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchAcademicyears.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.academicyears = action.payload
        })
        .addCase(fetchAcademicyears.rejected, (state, action) => {
            state.status = 'failed'

            state.error = action.error.message
        })
        .addCase(addNewAcademicYear.fulfilled,(state,action)=>{
            state.status = 'succeed'
            state.academicyears.push(Number(action.payload))
        })
        .addCase(addNewAcademicYear.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })

        .addCase(updateAcademicYear.fulfilled,(state,action)=>{
            const academicyear = action.payload
            const academicyears = state.academicyears.filter(a => a.id !== academicyear.id )
            state.academicyears= [...academicyears,academicyear]
    })
    .addCase(deleteAcademicYear.fulfilled,(state,action)=>{
        const academicyears = state.academicyears.filter(a => a.id !== Number(action.payload))

        state.academicyears = academicyears

    })
       
    }
});

export const  selectAllAcademicyears  = (state)=> state.academicyears.academicyears ;
export const  getAcademicyearStatus = (state)=> state.academicyears.status 
export const  getAcademicyearError = (state)=> state.academicyears.error 

export const selectAcademicyearById = (state,academicyearId) => state.academicyears.academicyears.find(academicyear => academicyear.id === academicyearId)

export const { addAcademicYear }    = academicyearSlices.actions
export default academicyearSlices.reducer