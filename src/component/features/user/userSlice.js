import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url }  from '../config/baseUrl'


const REGISTER_URL = `${base_url}/user/create/`
const GET_USER_URL = `${base_url}/user/all`
const UPDATE_USER_URL =  `${base_url}/user/update/`
const UPDATE_PASSWORD_URL = `${base_url}/user/updatePassword/`

export const register =createAsyncThunk('users/register',async(user)=>{
    console.log(user)
    console.log("gfdhhd"+user.PROGRAM_ID)
    const response = await axios.post(`${REGISTER_URL}${user.PROGRAM_ID}`,user,{
        'Content-Type':'application/json',
    })
    return response.data
})

export const fetchUsers  =  createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(GET_USER_URL);
    return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser',async(data) => {
    console.log("Update User"+data.programId)
    const response = await axios.patch(`${UPDATE_USER_URL}${data.programId}`,data);
    console.log("user data"+data)
    return response.data
})

export const updatePassword = createAsyncThunk('users/updatePassword',async(data)=>{
    console.log(data)
    console.log(data.programId)
    const response = await axios.patch(`${UPDATE_PASSWORD_URL}${data.programId}`,data.user)
    return response.data
})

const initialState = {
    user : [],
    status : 'idle',
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
            .addCase(updateUser.fulfilled,(state,action)=>{
                console.log("in userSlice"+action.payload);
                const user = action.payload;
                const users = state.user.filter((u) => u.id !== user.id)
                state.user = [...users,user]
            })
            .addCase(updatePassword.fulfilled,(state,action)=>{
                const user = action.payload;
                const users = state.user.filter((u) => u.id !== user.id)
                state.user = [...users,user]
            })
    }
})
export const  getUserStatus = (state)=> state.users.status 
export const  getUserError = (state)=> state.users.error 
export const selectUserById = (state,userId) => state.users.user.find(user => user.id === userId)
export const selectProgramUserById = (state,programId) => state.users.user.find(user => user.username === programId)
export const getUser = state => state.users.user
export default userSlice.reducer