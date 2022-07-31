import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthDefaultLayout() {
    return (
        <>
            <Outlet/>
        </>
    )
}

export default AuthDefaultLayout