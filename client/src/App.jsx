import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage.jsx'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage />}></Route>
   </Routes>
  )
}

export default App