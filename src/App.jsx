import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import CreateFruits from './pages/CreateFruits'
import Fruits from './pages/Fruits'

function App() {


  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />}></Route>
        <Route path="/create" element={<CreateFruits />}></Route>
      </Routes>
    </div>
  )
}

export default App
