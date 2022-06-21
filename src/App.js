import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'
import FourthPage from './Pages/FourthPage'
import DirectoryPage from './Pages/DirectoryPage'
export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/second' element={<SecondPage/>}/>
          <Route path='/third' element={<ThirdPage/>}/>
          <Route path='/fourth' element={<FourthPage/>}/>
          <Route path='/dir' element={<DirectoryPage/>}/>
        </Routes>
      </Router>
    </div>
   
  )
}




