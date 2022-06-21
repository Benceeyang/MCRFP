import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'
import PeoplePage from './Pages/PeoplePage'
import DirectoryPage from './Pages/DirectoryPage'
import FifthPage from './Pages/FifthPage'
import PublicPage from './Pages/PublicPage'
import ParksPage from './Pages/ParksPage'
import HealthPage from './Pages/HealthPage'
import HousingPage from './Pages/HousingPage'
import ChildrenPage from './Pages/ChildrenPage'
import ArtsPage from './Pages/ArtsPage'
import TransportationPage from './Pages/TransportationPage'
export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/second' element={<SecondPage/>}/>
          <Route path='/third' element={<ThirdPage/>}/>
          <Route path='/people' element={<PeoplePage/>}/>
          <Route path='/dir' element={<DirectoryPage/>}/>
          <Route path='/fifth' element={<FifthPage/>}/>
          <Route path='/public' element={<PublicPage/>}/>
          <Route path='/parks' element={<ParksPage/>}/>
          <Route path='/health' element={<HealthPage/>}/>
          <Route path='/housing' element={<HousingPage/>}/>
          <Route path='/children' element={<ChildrenPage/>}/>
          <Route path='/arts' element={<ArtsPage/>}/>
          <Route path='/transportation' element={<TransportationPage/>}/>
        </Routes>
      </Router>
    </div>
   
  )
}




