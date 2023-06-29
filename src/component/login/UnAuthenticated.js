import React from 'react'
import { useNavigate } from 'react-router-dom'

const UnAuthenticated = () => {
    const navigate = useNavigate()
    const backto = () => {navigate(-1)}
  return (
    <section><h1>UnAuthenticated</h1>
    <p>Your role is insufficient permission to request this page</p>
    <div>
        <button onClick={backto}>Go Back </button>
    </div>
    </section>
  )
}

export default UnAuthenticated