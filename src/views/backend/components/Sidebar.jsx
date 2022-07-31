import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    useEffect(() => {
        // window.$("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
        //     window.$("body").toggleClass("sidebar-toggled");
        //     window.$(".sidebar").toggleClass("toggled");
        //     if (window.$(".sidebar").hasClass("toggled")) {
        //         window.$('.sidebar .collapse').collapse('hide');
        //     };
        // });
    }, [])

    return (
        <>
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}

                <li className="nav-item">
                    <Link to={"/dashboard"} className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/dashboard/products"} className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Products</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/dashboard/product-details"} className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Products</span>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Nav Item - Utilities Collapse Menu */}
                {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench" />
                        <span>Utilities</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <a className="collapse-item" href="utilities-color.html">Colors</a>
                            <a className="collapse-item" href="utilities-border.html">Borders</a>
                            <a className="collapse-item" href="utilities-animation.html">Animations</a>
                            <a className="collapse-item" href="utilities-other.html">Other</a>
                        </div>
                    </div>
                </li> */}
                {/* Divider */}

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
            </ul>
            {/* End of Sidebar */}
        </>
    )
}

export default Sidebar