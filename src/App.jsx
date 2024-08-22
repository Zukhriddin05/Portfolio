import React from 'react'
import Nav from './components/nav/Nav'
import Banner from './components/banner/Banner'
import './index.css'
import Header from './components/header/Header'
import Level from './components/level/Level'
import Card from './components/card/Card'
import Slider from './components/slider/Slider'
import Contact from './components/contact/contact'

const App = () => {
  return (
    <div className="wrapper">
      <Nav />
      <Banner />
      <Header />
      <Level />
      <Card />
      <Slider />
      <Contact />
    </div>
  )
}

export default App
