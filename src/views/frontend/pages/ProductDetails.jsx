import React from 'react'
import { FrontendBreadcumb } from '../FrontendCompontents'

function ProductDetails() {
    return (
        <>
            <FrontendBreadcumb />
            <div className='row'>
                <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                    <div className="detail-gallery">
                        <span className="zoom-icon"><i className="fi-rs-search" /></span>
                        {/* MAIN SLIDES */}
                        <div className="product-image-slider">
                            <figure className="border-radius-10">
                                <img src="/assets/images/p1.jpg" alt="product image" />
                            </figure>
                        </div>
                        {/* THUMBNAILS */}
                        <div className="d-flex g-2 slider-nav-thumbnails">
                            <div><img width={100} src="/assets/images/p1.jpg" alt="product image" /></div>
                            <div><img width={100} src="/assets/images/p1.jpg" alt="product image" /></div>
                            <div><img width={100} src="/assets/images/p1.jpg" alt="product image" /></div>
                            <div><img width={100} src="/assets/images/p1.jpg" alt="product image" /></div>
                            <div><img width={100} src="/assets/images/p1.jpg" alt="product image" /></div>
                        </div>
                    </div>
                    {/* End Gallery */}
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="detail-info pr-30 pl-30">
                        <span className="stock-status out-stock"> Sale Off </span>
                        <h2 className="title-detail">Seeds of Change Organic Quinoa, Brown</h2>
                        <div className="product-detail-rating">
                            <div className="product-rate-cover text-end">
                                <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{ width: '90%' }} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                            </div>
                        </div>
                        <div className="clearfix product-price-cover">
                            <div className="product-price primary-color float-left">
                                <span className="current-price text-brand">$38</span>
                                <span>
                                    <span className="save-price font-md color3 ml-15">26% Off</span>
                                    <span className="old-price font-md ml-15">$52</span>
                                </span>
                            </div>
                        </div>
                        <div className="short-desc mb-30">
                            <p className="font-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>
                        </div>
                        <div className="attr-detail attr-size mb-30">
                            <strong className="mr-10">Size / Weight: </strong>
                            <ul className="list-filter size-filter font-small">
                                <li><a href="#">50g</a></li>
                                <li className="active"><a href="#">60g</a></li>
                                <li><a href="#">80g</a></li>
                                <li><a href="#">100g</a></li>
                                <li><a href="#">150g</a></li>
                            </ul>
                        </div>
                        <div className="detail-extralink mb-50">
                            <div className="detail-qty border radius">
                                <a href="#" className="qty-down"><i className="fi-rs-angle-small-down" /></a>
                                <input type="text" name="quantity" className="qty-val" defaultValue={1} min={1} />
                                <a href="#" className="qty-up"><i className="fi-rs-angle-small-up" /></a>
                            </div>
                            <div className="product-extra-link2">
                                <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart" />Add to cart</button>
                                <a aria-label="Add To Wishlist" className="action-btn hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                            </div>
                        </div>
                        <div className="font-xs">
                            <ul className="mr-50 float-start">
                                <li className="mb-5">Type: <span className="text-brand">Organic</span></li>
                                <li className="mb-5">MFG:<span className="text-brand"> Jun 4.2022</span></li>
                                <li>LIFE: <span className="text-brand">70 days</span></li>
                            </ul>
                            <ul className="float-start">
                                <li className="mb-5">SKU: <a href="#">FWM15VKT</a></li>
                                <li className="mb-5">Tags: <a href="#" rel="tag">Snack</a>, <a href="#" rel="tag">Organic</a>, <a href="#" rel="tag">Brown</a></li>
                                <li>Stock:<span className="in-stock text-brand ml-5">8 Items In Stock</span></li>
                            </ul>
                        </div>
                    </div>
                    {/* Detail Info */}
                </div>
            </div>
        </>
    )
}

export default ProductDetails