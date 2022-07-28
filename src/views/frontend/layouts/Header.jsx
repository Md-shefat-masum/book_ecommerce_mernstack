import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='py-3 shadow bg-light rounded-1'>
            <ul className='d-flex flex-wrap gap-2'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/product-details">Product Details</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><a href="/#/">Login</a></li>
            </ul>
        </div>
    )
}

export default Header