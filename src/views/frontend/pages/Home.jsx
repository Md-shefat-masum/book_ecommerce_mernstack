import React, { useEffect } from 'react'
import useStore from '../../../hooks/useStore';
import {
    FrontendHomeBanner,
    FrontendHomeLatestPorducts
} from '../FrontendCompontents'


function Home() {
    const { authReducer } = useStore();

    useEffect(() => {
        console.log(authReducer);
    }, [])

    return (
        <>
            <FrontendHomeBanner />
            <FrontendHomeLatestPorducts />
        </>
    )
}

export default Home