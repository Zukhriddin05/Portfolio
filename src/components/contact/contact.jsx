import React from 'react'
import './contact.scss'
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const contact = () => {
    return (
        <div id='contact' className="contact">
            <div className="container">
                <h2 className="header__title">let`s talk about your project</h2>
                <a href="" className="header__main-link">contact us</a>
                <div className="contact__box">
                    <div className="contact__box-first">
                        <div className="contact__box-div">
                            <a className='contact__first-link' href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A8%D0%B8%D1%80%D0%B8%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2815999,69.1780463,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae899a4430f321:0x7734abb0884d6f18!8m2!3d41.2815959!4d69.1806212!16s%2Fg%2F1vvdsl5d?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D">
                                <IoLocationOutline />
                            </a>
                            <div className='contact__box-title'>
                                <h2 className="contact__first-title">address</h2>
                                <p className="contact__first-txt">Uchtepa, Tashkent, Uzbekistan</p>
                            </div>
                        </div>
                        <div className="contact__box-div">
                            <a className='contact__first-link' href="">
                                <CiMail />
                            </a>
                            <div className='contact__box-title'>
                                <h2 className="contact__first-title">email</h2>
                                <a href='' className="contact__first-txt">zukhriddinakbarov0336@bk.ru</a>
                            </div>
                        </div>
                        <div className="contact__box-div">
                            <a className='contact__first-link' href="tel:+998 33 036 03 36">
                                <IoCallOutline />
                            </a>
                            <div className='contact__box-title'>
                                <h2 className="contact__first-title">phone</h2>
                                <a href='tel:+998 33 036 03 36' className="contact__first-txt">+998 33 036 03 36</a>
                            </div>
                        </div>
                    </div>
                    <form className="contact__box-second">
                        <input type="text" className="contact__sec-input" placeholder='full name' />
                        <input type="text" className="contact__sec-input" placeholder='Email Address' />
                        <textarea name="" id="" cols="30" rows="5" placeholder='Your Message' className="contact__sec-input btn-input"></textarea>
                    </form>
                </div>
                <div className="contact__button-box">
                    <button className="contact__button nav__main-link">Send Message</button>
                </div>
                <div className="contact__line"></div>
                <h2 className="contact__title">©️ All Rights Reserved.</h2>
            </div>
        </div>
    )
}

export default contact
