import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import Home from './components/Home'
import Project from './components/Project'
import './App.css'

export default function App() {
  const createApp = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <>
      { createApp() }
    </>
  )
}

