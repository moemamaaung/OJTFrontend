import React from 'react'
import { getUser } from '../features/auth/authSlice'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(getUser)
    console.log("User" + user)

    if(!user){
        return(
            <li>Unknown</li>
        )
    }
  return (
    <li>{user.fullname}</li>
  )
}

export default Profile