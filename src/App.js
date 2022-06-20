import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
<<<<<<< HEAD
import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'
import FourthPage from './Pages/FourthPage'
import DirectoryPage from './Pages/DirectoryPage'
=======
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

>>>>>>> 513ee7595a28be36b85548e8c49e17d068c72e14
export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/second' element={<SecondPage/>}/>
          <Route path='/third' element={<ThirdPage/>}/>
<<<<<<< HEAD
          <Route path='/fourth' element={<FourthPage/>}/>
          <Route path='/dir' element={<DirectoryPage/>}/>
=======
>>>>>>> 513ee7595a28be36b85548e8c49e17d068c72e14
        </Routes>
      </Router>
    </div>
   
  )
}




