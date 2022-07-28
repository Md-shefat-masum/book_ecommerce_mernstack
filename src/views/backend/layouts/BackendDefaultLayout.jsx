import React from 'react'
import { Outlet } from 'react-router-dom'
import { BackendFooter, BackendHeader } from '../BackendCompontents'

function BackendDefaultLayout() {
    return (
        <div>
            <BackendHeader></BackendHeader>
            <Outlet></Outlet>
            <BackendFooter></BackendFooter>
        </div>
    )
}

export default BackendDefaultLayout