import React from 'react'

function Banner() {
    return (
        <>
            <section className="home-slider position-relative mb-30">
                <div className="container">
                    <div className="home-slide-cover mt-30">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                            <div className="single-hero-slider single-animation-wrap"  style={{ backgroundImage: 'url(/assets/images/1.png)'}}>
                                <div className="slider-content">
                                    <h1 className="display-2 mb-40">
                                        Don’t miss amazing<br />
                                        grocery deals
                                    </h1>
                                    <p className="mb-65">Sign up for the daily newsletter</p>
                                    <form className="form-subcriber d-flex">
                                        <input type="email" placeholder="Your emaill address" />
                                        <button className="btn" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End hero slider*/}
        </>
    )
}

export default Banner