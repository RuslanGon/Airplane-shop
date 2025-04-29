import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage.jsx'
import PlaneDetails from './components/PlaneDetails.jsx'
import CreatePlane from './components/CreatePlane.jsx'
import EditPlane from './components/EditPlane.jsx'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path="/planes/:id" element={<PlaneDetails />} />
    <Route path="/create" element={<CreatePlane />} />
    <Route path="/planes/:planeId/edit" element={<EditPlane />} />
   </Routes>
  )
}

export default App