import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const GET_ALL_APPLICANTS = 'http://localhost:8585/api/applicant/all'
const POST_NEW_APPLICANTES = 'http://localhost:8585/api/applicant/create/'
const DELETE_APPLICANT = 'http://localhost:8585/api/applicant/delete/'
const POST_NEW_CONFIRM_APPLICANT ='http://localhost:8585/api/confirm/create'

// export const addNewApplicant = createAsyncThunk('applicants/addNewApplicant',async (data)=>{
//     console.log("Hello data "+data)
//     console.log("Program Id in AddNew Applicant"+data.PROGRAM_ID)
//     await axios.post(`${POST_NEW_APPLICANTES}${data.PROGRAM_ID}`,data)
//     // await axios.post(POST_NEW_APPLICANTES)
//     await axios.get(GET_ALL_APPLICANTS)
//     const response = await axios.get(GET_ALL_APPLICANTS)
//     return response.data
// })


export const addNewApplicant = createAsyncThunk('applicants/addNewApplicant',async (data)=>{
    console.log("Hello data "+data)
    console.log("Program Id in AddNew Applicant"+data.PROGRAM_ID)
    const response = await axios.post(`${POST_NEW_APPLICANTES}${data.PROGRAM_ID}`,data)
    
 
    return response.data
})

export const fetchApplicants = createAsyncThunk('applicants/fetchApplicants', async () => {
    const response = await axios.get(GET_ALL_APPLICANTS)
    return response.data
})


export const deleteApplicant = createAsyncThunk('applicants/deleteApplicant', async (id) => {
    const response = await axios.delete(`${DELETE_APPLICANT}${id}`);
    return response.data
})

export const confirmApplicant = createAsyncThunk('applicants/deleteApplicant', async (data) => {
    const applicant=data.applicant
    const id=data.id
   await axios.post(POST_NEW_CONFIRM_APPLICANT,applicant)
    const response = await axios.delete(`${DELETE_APPLICANT}${id}`);
    return response.data
})

const initialState = {
    applicants: {},
    status: 'idle',
    addEdu : false,
    addExp : false,
    error: null
}
export const applicantSlice = createSlice({
    name: 'applicants',
    initialState,
            reducers:{
                setEdu : (state,action)=>{
                    state.addEdu = action.payload

                },
                setExp : (state,action)=>{
                    state.addExp = action.payload
                }
            },
   
    extraReducers(builder) {
        builder
            .addCase(fetchApplicants.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchApplicants.fulfilled, (state, action) => {
               
                state.status = 'succeeded'
                state.applicants = action.payload
                console.log("In the all applicants success "+state.applicants)
            })
            .addCase(fetchApplicants.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message

            })
            .addCase(addNewApplicant.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.applicants.push(action.payload)
            }).addCase(addNewApplicant.rejected,(state,action)=>{
                state.status = 'failed'
                state.error = action.error.message

            })
            .addCase(deleteApplicant.fulfilled, (state, action) => {
                const applicants = state.applicants.filter(a => a.id !== Number(action.payload))
                state.applicants = applicants

            })



    }
})


export const selectAllApplicants = (state) => state.applicants.applicants
export const getApplicantStatus = (state) => state.applicants.status
export const getApplicantError = (state) => state.applicants.error



export const selectApplicantById = (state, applicantId) => state.applicants.applicants.find(applicant => applicant.id === applicantId)

export const { addApplicant,setEdu,setExp } = applicantSlice.actions
export const getEduInApp = (state)=> state.applicants.addEdu
export const getExpInApp = (state) => state.applicants.addExp

export default applicantSlice.reducer