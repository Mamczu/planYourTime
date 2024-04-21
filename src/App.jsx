import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AllTasks from './views/AllTasks'
import CurrentTasks from './views/CurrentTasks'
import PriorityTasks from './views/PriorityTasks'
import SideTasks from './views/SideTasks'
import Notes from './views/Notes'


function App() {
  return (
    <Router>
       <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/current" element={<CurrentTasks />} />
        <Route path="/priority" element={<PriorityTasks />} />
        <Route path="/side" element={<SideTasks />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/" element={<AllTasks />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App