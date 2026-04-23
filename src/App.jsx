import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HeroPage from './pages/Heropage'
import AetheraHero from './pages/Heropage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AetheraHero />} />
      </Routes>
    </>
  )
}

export default App
