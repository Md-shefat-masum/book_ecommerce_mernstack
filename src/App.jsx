import React from 'react'
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import StoreContextProvider from './contexts/StoreContext'
import PrivateRoute from './routes/PrivateRoute'
import {
    AuthDefaultLayout,
    AuthLogin,
    AuthRegister
} from './views/auth/AuthCompontents'
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
        <StoreContextProvider>
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

                    <Route element={<AuthDefaultLayout />}>
                        <Route path='login' element={<AuthLogin />}></Route>
                        <Route path='register' element={<AuthRegister />}></Route>
                    </Route>

                    <Route path='/dashboard' element={<PrivateRoute><BackendDefaultLayout /></PrivateRoute>}>
                        <Route index element={<BackendDashboard />}></Route>
                        <Route path='products' element={<BackendProducts />}></Route>
                        <Route path='product-details' element={<BackendProductDetails />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StoreContextProvider>
    )
}

export default App
