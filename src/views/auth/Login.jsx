import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useStore from '../../hooks/useStore'
import { getAuth } from "firebase/auth";

function Login() {
    const { authReducer, dispatchAuth } = useStore();
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        if (authReducer.checkAuth === true) {
            navigate('/dashboard');
        }
    },[authReducer])

    
    const loginWithGoogle = () => {
        dispatchAuth({type:'loginWithGoogle'});
    }

    return (
        <div className="container">
           data:  {JSON.stringify(authReducer)}
            {/* Outer Row */}
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                                    <Link to="/">
                                        <img src="/assets/images/logo.svg" alt="" />
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user" onSubmit={(e) => { e.preventDefault(); dispatchAuth({ type: 'login', value: e }); }}>
                                            <div className="form-group">
                                                <input type="text" name='name' className="form-control form-control-user" id="name" placeholder="you name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name='email' className="form-control form-control-user" id="email" placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" className="form-control form-control-user" id="password" placeholder="Password" />
                                            </div>
                                            <div className="form-group overflow-hidden">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" name='remember' defaultValue={true} className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <button type='submit' className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                            <hr />
                                            <button type='button' onClick={loginWithGoogle} className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw" /> Login with Google
                                            </button>
                                            {/* <button type='button' onClick={logout}>logout</button> */}
                                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="#/">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to="/register">Create an Account!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login