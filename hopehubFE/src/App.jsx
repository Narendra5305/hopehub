import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';
import PostUpdate from './pages/PostUpdate';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';




function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post-update" element={<PostUpdate />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
