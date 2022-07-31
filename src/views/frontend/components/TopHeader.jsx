import React from 'react'
import { Link } from 'react-router-dom'

function TopHeader() {
    return (
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-4">
                        <div className="header-info">
                            <ul>
                                <li><a href="page-about.htlm">About Us</a></li>
                                <li><a href="page-account.html">My Account</a></li>
                                <li><a href="shop-wishlist.html">Wishlist</a></li>
                                <li><a href="shop-order.html">Order Tracking</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4">
                        <div className="text-center">
                            <div id="news-flash" className="d-inline-block" style={{ overflow: 'hidden', position: 'relative', height: '14px' }}>
                                <ul style={{ position: 'absolute', margin: '0px', padding: '0px', top: '0px' }}>
                                    <li style={{ margin: '0px', padding: '0px', height: '14px', opacity: '0.783634' }}>Supper Value Deals - Save more with coupons</li><li style={{ margin: '0px', padding: '0px', height: '14px', opacity: '0.783634' }}>Supper Value Deals - Save more with coupons</li><li style={{ margin: '0px', padding: '0px', height: '14px', opacity: '0.783634' }}>Supper Value Deals - Save more with coupons</li></ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="header-info header-info-right">
                            <ul>
                                <li>
                                    Need help? Call Us: <strong className="text-brand">
                                        + 1800 900</strong></li>
                                <li>
                                    <Link to="/dashboard">go to dashboard</Link>
                                </li>
                                {/* <li>
                                    <a className="language-dropdown-active" href="#">English <i className="fi-rs-angle-small-down" /></a>
                                    <ul className="language-dropdown">
                                        <li>
                                            <a href="#"><img src="assets/imgs/theme/flag-fr.png" alt="" />Français</a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />Deutsch</a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />Pусский</a>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader