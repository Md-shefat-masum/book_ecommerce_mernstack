import React from 'react'
import { Navigate } from 'react-router-dom';
import useStore from '../hooks/useStore'

function PrivateRoute({ children }) {
    const {authReducer} = useStore();

    if(authReducer.checkAuth === true){
        return (
            <div>{children}</div>
        )
    }else{
        return <Navigate to={'/login'}></Navigate>
    }
}

export default PrivateRoute