import React, { createContext, useEffect, useReducer } from 'react'
import authAction from './actions/authAction';

export const StoreContext = createContext(null);

function StoreContextProvider({ children }) {
    const [authReducer, dispatchAuth] = useReducer(authAction, {
        checkAuth: false,
        authDetails: {
            name: null,
            email: null,
            image: null,
        }
    });

    useEffect(() => {
        console.log(authReducer);
    }, [authReducer])
    

    const value = {
        authReducer,
        dispatchAuth
    }

    return (
        <StoreContext.Provider value={ value }>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider