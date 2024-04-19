import React from 'react'
import "./Banner.css"
import iphone from '../../assets/Img/toppng.com-apple-iphone-15-pro-max-blue-titanium-edition-hd-png-1600x1600.png'

function Banner() {
    return (
        <>
            <div className='container bg_color_banner'>
                <div className='banner_text_content'>
                    <div>
                        <h2>Stay home & get your daily
                            needs from our shop</h2>
                        <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                        <form className='banner_form'>
                            <input type="text" placeholder='Your emaill address' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div className='img_wrapper_bnaner'>
                        <img src={iphone} alt=""  width={'400px'} height={"400px"}/>
                    </div> 
                </div>
            </div>
        </>
    )

}

export default Banner;