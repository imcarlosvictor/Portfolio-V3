import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Project from './components/Project';
import Error from './components/Error';
import './App.css';

export default function App() {
  const createApp = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/project" element={<Project/>}/>
          <Route path="*" element={<Error/>}/>"
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

