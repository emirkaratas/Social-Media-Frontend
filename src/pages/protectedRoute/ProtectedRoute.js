import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({active}) {
    const loggedIn = false
    if (active && loggedIn) return <Navigate to= "/"/>
    if (active && !loggedIn) return <Outlet/>
    return loggedIn? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoute