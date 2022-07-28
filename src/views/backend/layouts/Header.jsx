import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='py-3 shadow bg-light rounded-1'>
            <ul className='d-flex flex-wrap gap-2'>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/dashboard/products">Products</Link></li>
                <li><Link to="/dashboard/product-details">Product Details</Link></li>
            </ul>
        </div>
    )
}

export default Header