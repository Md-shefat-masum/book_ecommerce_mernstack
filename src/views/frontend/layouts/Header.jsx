import React from 'react'
import { FrontendNavbar, FrontendSearchBar, FrontendTopHeader } from '../FrontendCompontents'

function Header() {
    return (
        <header className="header-area header-style-1 header-height-2">
            <FrontendTopHeader />
            <FrontendSearchBar />
            <FrontendNavbar />
        </header>
    )
}

export default Header