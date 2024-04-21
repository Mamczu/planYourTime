import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-light-blue min-w-64 text-white flex flex-col items-center pt-4 min-h-svh">
      <img src="src\assets\img\timer.svg" alt="Logo" className="mb-4 w-16 pt-4" />
      <ul className='flex flex-col items-center gap-2'>
        <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/">Wszystkie zadania</Link></li>
        <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/current">Aktualne zadania</Link></li>
        <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/priority">Priorytetowe zadania</Link></li>
        <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/side">Poboczne zadania</Link></li>
        <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/notes">Notatki</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar