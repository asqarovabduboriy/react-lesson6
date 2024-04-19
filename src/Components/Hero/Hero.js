import React from 'react'
import "./Hero.css"
import { FaApple } from "react-icons/fa";
import samsung from '../../assets/Img/samsung-logo-svgrepo-com.svg'
import oppo from '../../assets/Img/Oppo-Logo.wine.svg'
import mi from "../../assets/Img/xiaomi-1-logo-svgrepo-com.svg"
import iphoe from '../../assets/Img/toppng.com-hd-png-of-apple-iphone-15-pro-max-in-natural-titanium-1600x1600.png'
import { IoIosClose } from "react-icons/io";

function Hero() {
    const hero_item = ["Oppo", "apple", "Mi", "huwawe",]
    let item_hero = hero_item?.map((el, i) => (
        <div className='hero_card' key={i}>
            <IoIosClose className='close_btn' />
            <p>{el}</p>
        </div>
    ))
    return (
        <>
            <div className='Bg_color'>
                <FaApple className='apple_icon' />
                <img className='samsung_icon' src={samsung} alt="" />
                <img className='Oppo_icon' src={oppo} alt="" />
                <img className='mi_icon' src={mi} alt="" />
                <img className='iphone' src={iphoe} alt="" />
                <div className='container flex-items'>
                    <div className='text_content'>
                        <div className='hero_text_content_one'>
                            <span>100%</span>
                            <p> Organic Vegetables</p>
                        </div>
                        <div className='hero_text_content_two'>
                            <h1>The best way to
                                stuff your wallet.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                                reiciendis beatae consequuntur.</p>
                        </div>

                        <form className='hero_from'>
                            <input type="text" placeholder='Your emaill address' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div className='hero_card_flex'>
                        {item_hero}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero;
