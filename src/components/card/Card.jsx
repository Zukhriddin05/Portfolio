import React from 'react'
import './card.scss'
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";


const Card = () => {
    return (
        <div id='card' className="card">
            <div className="container">
                <h2 className="header__title">my latest projects</h2>
                <a href="" className="header__main-link">portfolio</a>
                <div className="card__box">
                    <div className="card__box-div">
                        <img src="10.png" alt="" className="card__box-img" />
                        <h2 className="card__box-title">Air booking</h2>
                        <p className="card__box-txt">Airbookinguz is a tour agency dedicated to providing seamless travel experiences and customized itineraries for its clients.</p>
                        <div className="card__box-icon">
                            <a href="https://www.instagram.com/airbooking.uz/">< FaInstagram className="card__icon" /></a>
                            <a href="https://www.behance.net/gallery/206120219/Airbooking-Travel-Agency">< FaBehance className="card__icon" /></a>
                        </div>
                    </div>
                    <div className="card__box-div">
                        <img src="11.png" alt="" className="card__box-img" />
                        <h2 className="card__box-title">Air booking 24</h2>
                        <p className="card__box-txt">Airbooking24 is an air ticket company specializing in offering competitive prices and convenient booking options for travelers worldwide.</p>
                        <div className="card__box-icon">
                            <a href="https://www.instagram.com/airbooking24/">< FaInstagram className="card__icon" /></a>
                            <a href="#!">< FaBehance className="card__icon" /></a>
                        </div>
                    </div>
                    <div className="card__box-div">
                        <img src="12.png" alt="" className="card__box-img" />
                        <h2 className="card__box-title">Infinity agency</h2>
                        <p className="card__box-txt">Infinity is a digital marketing company in Uzbekistan, dedicated to delivering innovative solutions that drive brand growth.</p>
                        <div className="card__box-icon">
                            <a href="https://www.instagram.com/infinityuzb/">< FaInstagram className="card__icon" /></a>
                            <a href="https://www.behance.net/gallery/148007715/Infinity-Zukhriddin-Akbarov">< FaBehance className="card__icon" /></a>
                        </div>
                    </div>
                    <div className="card__box-div">
                        <img src="13.png" alt="" className="card__box-img" />
                        <h2 className="card__box-title">Tuko collection</h2>
                        <p className="card__box-txt">Tuko Collection is a men's clothing brand known for its stylish and high-quality apparel that blends modern trends with timeless design.</p>
                        <div className="card__box-icon">
                            <a href="https://www.instagram.com/tukocollectionuz/">< FaInstagram className="card__icon" /></a>
                            <a href="https://www.behance.net/gallery/148011665/Tuko-Collection-Zukhriddin-Akbarov">< FaBehance className="card__icon" /></a>
                        </div>
                    </div>
                    <div className="card__box-div">
                        <img src="14.png" alt="" className="card__box-img" />
                        <h2 className="card__box-title">Max media ss</h2>
                        <p className="card__box-txt">MaxMediaSS is a digital marketing company focused on innovative strategies to enhance online visibility and drive growth.</p>
                        <div className="card__box-icon">
                            <a href="https://www.instagram.com/maxmediass/">< FaInstagram className="card__icon" /></a>
                            <a href="#!">< FaBehance className="card__icon" /></a>
                        </div>
                    </div>
                    <div className="card__box-div">
                        <img src="15.png" alt="" className="card__box-img" />
                        <h2 className="card__box-title">baraka corporation</h2>
                        <p className="card__box-txt">Baraka Corporation is a company that provides specialized logistics services across the interior of America, ensuring efficient and timely deliveries.</p>
                        <div className="card__box-icon">
                            <a href="https://www.instagram.com/barakacorporation_/">< FaInstagram className="card__icon" /></a>
                            <a href="https://www.behance.net/gallery/148005459/Baraka-Corporation-Zukhriddin-Akbarov">< FaBehance className="card__icon" /></a>
                        </div>
                    </div>
                    <div className="card__box-div">
                        <img src="16.png" alt="" className="card__box-img" />
                        <h2 className="card__box-title">fsm distribution</h2>
                        <p className="card__box-txt">Prosofen is an IT company focused on delivering cutting-edge technology solutions and services to help
                            businesses thrive in the digital age.</p>
                        <div className="card__box-icon">
                            <a href="https://www.instagram.com/prosofen/">< FaInstagram className="card__icon" /></a>
                            <a href="#!">< FaBehance className="card__icon" /></a>
                        </div>
                    </div>
                    <div className="card__box-div">
                        <img src="17.png" alt="" className="card__box-img" />
                        <h2 className="card__box-title">fsm distribution</h2>
                        <p className="card__box-txt">FSM is a distribution company specializing in the distribution of phones, offering a wide range of mobile devices to retailers and consumers.</p>
                        <div className="card__box-icon">
                            <a href="https://www.instagram.com/fsmdistribution/">< FaInstagram className="card__icon" /></a>
                            <a href="#!">< FaBehance className="card__icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card