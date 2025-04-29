import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage.jsx'
import PlaneDetails from './components/PlaneDetails.jsx'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path="/planes/:id" element={<PlaneDetails />} />
   </Routes>
  )
}

export default App