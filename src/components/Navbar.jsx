import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-light-blue w-64 text-white h-full min-h-screen flex flex-col items-center pt-4">
      <img src="src\assets\img\timer.svg" alt="Logo" className="mb-4 w-16 pt-4" />
      <ul>
        <li className="hover:bg-gray-200 hover:text-black p-2"><Link to="/">Wszystkie zadania</Link></li>
        <li className="hover:bg-gray-200 hover:text-black p-2"><Link to="/current">Aktualne zadania</Link></li>
        <li className="hover:bg-gray-200 hover:text-black p-2"><Link to="/priority">Priorytetowe zadania</Link></li>
        <li className="hover:bg-gray-200 hover:text-black p-2"><Link to="/side">Poboczne zadania</Link></li>
        <li className="hover:bg-gray-200 hover:text-black p-2"><Link to="/notes">Notatki</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar