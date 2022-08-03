import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import useStore from '../../../hooks/useStore'
// import { BackendFooter, BackendHeader } from '../BackendCompontents'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Footer from './Footer'

function BackendDefaultLayout() {
    const { dispatchAuth } = useStore();
    let navigate = useNavigate();
    return (
        <div>
            <div>
                {/* Page Wrapper */}
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    {/* Content Wrapper */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/* Main Content */}
                        <div id="content">
                            <Topbar />
                            <Outlet></Outlet>
                        </div>
                        {/* End of Main Content */}
                        <Footer />
                    </div>
                    {/* End of Content Wrapper */}
                </div>
                {/* End of Page Wrapper */}
                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>

                {/* Logout Modal*/}
                <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <Link data-dismiss="modal" onClick={() =>{dispatchAuth({type:'logout'}); navigate('/')}} className="btn btn-primary" to='/'>Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <BackendHeader></BackendHeader> */}

            {/* <BackendFooter></BackendFooter> */}
        </div>
    )
}

export default BackendDefaultLayout