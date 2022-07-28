import React from 'react'
import { Outlet } from 'react-router-dom'
import {
    FrontendFooter,
    FrontendHeader,
} from '../FrontendCompontents'

function HomeDefaultLayout() {
    return (
        <>
            <FrontendHeader />
            <main className="main">
                <Outlet />
            </main>
            <FrontendFooter />
        </>
    )
}

export default HomeDefaultLayout