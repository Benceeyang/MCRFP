import React from 'react'
import Branding from '../home/Branding'
import Home from '../home/homes/Home'
import About from '../home/about/About'
import Service from '../home/servicess/Services/Service'
import Header from '../home/header/Header'



function HomePages() {
  return (
    <>
    <Header/>
    <Home />
    <Branding />
    <About />
    <Service/>
    
    </>
  )
}

export default HomePages