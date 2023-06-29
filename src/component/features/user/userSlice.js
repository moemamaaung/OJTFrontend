import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url }  from '../config/baseUrl'

const REGISTER_URL = `${base_url}/user/create/`
const GET_REGISTER_URL = `${base_url}/user/all`

export const register =createAsyncThunk('users/register',async(user)=>{
    console.log(user)
    const response = await axios.post(`${REGISTER_URL}${user.programId}`,user,{
        'Content-Type':'application/json',
    })
    return response.data
})

export const fetchUsers  =  createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(GET_REGISTER_URL);
    return response.data;
});

const initialState = {
    user : [],
    error : null

}
export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(register.fulfilled,(state,action)=>{
                console.log(action.payload)
                state.user = action.payload 
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
    }
})
export const  getUserStatus = (state)=> state.users.status 
export const  getUserError = (state)=> state.users.error 

export const selectUserById = (state,userId) => state.users.user.find(user => user.id === userId)
export const selectProgramUserById = (state,programId) => state.users.user.find(user => user.username === programId)


export const getUser = state => state.users.user
export default userSlice.reducer