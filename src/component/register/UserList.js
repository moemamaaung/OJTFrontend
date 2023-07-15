import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchUsers, getUser, getUserError, getUserStatus } from "../features/user/userSlice";
import UserItem from "./UserItem";
import { fetchPrograms } from "../program/programSlices";
import { fetchApplicants } from "../../applicant/applicantSlice";
function UserList(){
    const dispatch = useDispatch();

    const user = useSelector(getUser)

    
    const userStatus = useSelector(getUserStatus)
    const userError = useSelector(getUserError)

    useEffect(()=>{
        
            dispatch(fetchPrograms())
           
            dispatch(fetchApplicants())
            dispatch(fetchUsers())
        
    },[dispatch])

    let content;

    if(userStatus === 'loading'){
        content = (<p>Loading......</p>)
    }
 
    if(userStatus === 'succeeded'){
        content = user.map(
            (student)=>(
                    <UserItem
                    id = {student.id}
                    fullname = {student.fullname}
                    username = {student.username}
                    phno = {student.phno}
                    gender = {student.gender}
                    street = {student.street}
                    township = {student.township}
                    city = {student.city}
                    password = {student.password}
                    program = {student.program}
                      />)
                   
    
                   
    
                );
            }
            
    
    if(userStatus === 'failed'){
        content = (<p>{userError}</p>)
    }

    return content;
}

export default UserList