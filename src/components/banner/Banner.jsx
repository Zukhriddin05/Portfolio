import './banner.scss';
import React, { useState, useEffect } from 'react';
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


// import TypingEffect from './TypingEffect';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__box-first">
          <h2 className="banner__title-s">Hello I`M Zukhriddin</h2>
          <h1 className="banner__title-l">A PROJECT MANAGER &</h1>
        </div>
        <div className="banner__box-second">
          <img className='banner__box-img' src="2.png" alt="" />
          <h1 className="banner__title-m"> & Brand manager</h1>
        </div>
        <div className="banner__box-icons">
          <a href="https://www.behance.net/zukhriddinakbarov/projects" className="banner__icon-link"><FaBehance /></a>
          <a href="https://www.linkedin.com/in/zukhriddin-akbarov-326465213/" className="banner__icon-link"><FaLinkedin /></a>
          <a href="https://www.facebook.com/zukhriddin.akbarov/" className="banner__icon-link"><FaFacebookSquare /></a>
        </div>
      </div>
    </div>
  )
}

export default Banner;
