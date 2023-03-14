import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoutes() {
    const { IsLogdin } = useSelector(state => state.Signin)
    return (
        IsLogdin ? <Outlet /> : <Navigate to="/v3/seller/signin" />
    )
}
