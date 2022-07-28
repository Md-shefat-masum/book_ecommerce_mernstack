import React from 'react'
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import { 
    BackendDashboard, 
    BackendDefaultLayout, 
    BackendProductDetails, 
    BackendProducts 
} from './views/backend/BackendCompontents'

import {
    FrontendCart,
    FrontendCheckout,
    FrontendHome,
    FrontendHomeDefaultLayout,
    FrontendProductDetails,
    FrontendProducts,
    FrontendProfile
} from './views/frontend/FrontendCompontents'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<FrontendHomeDefaultLayout />}>
                    <Route index element={<FrontendHome />}></Route>
                    <Route path='products' element={<FrontendProducts />}></Route>
                    <Route path='product-details' element={<FrontendProductDetails />}></Route>
                    <Route path='cart' element={<FrontendCart />}></Route>
                    <Route path='checkout' element={<FrontendCheckout />}></Route>
                    <Route path='profile' element={<FrontendProfile />}></Route>
                </Route>

                <Route path='/dashboard' element={<BackendDefaultLayout />}>
                    <Route index element={<BackendDashboard />}></Route>
                    <Route path='products' element={<BackendProducts />}></Route>
                    <Route path='product-details' element={<BackendProductDetails />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
