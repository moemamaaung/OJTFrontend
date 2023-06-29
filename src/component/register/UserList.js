import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchAcademicyears } from "../academicyear/academicyearSlices";
import { fetchUsers, getUser, getUserError, getUserStatus } from "../features/user/userSlice";
import UserItem from "./UserItem";
import { fetchPrograms } from "../program/programSlices";
function UserList(){
    const dispatch = useDispatch();

    const users = useSelector(getUser);
    console.log(users)
    
    const userStatus = useSelector(getUserStatus)
    const userError = useSelector(getUserError)

    useEffect(()=>{
        if(userStatus === 'idle'){
            dispatch(fetchPrograms())
            dispatch(fetchAcademicyears())
            dispatch(fetchUsers())
        }
    },[userStatus,dispatch])

    let content;

    if(userStatus === 'loading'){
        content = (<p>Loading......</p>)
    }

    if(userStatus === 'succeeded'){
        content = users.map(
            (user)=>(
                
                    <UserItem
                    id = {user.id}
                    fullname = {user.fullname}
                    username = {user.username}
                    password = {user.password}
                    program = {user.program}
                    
                  
                    />)
                   
    
                   
    
                );
            }
            
    
    if(userStatus === 'failed'){
        content = (<p>{userError}</p>)
    }

    return content;
}

export default UserList