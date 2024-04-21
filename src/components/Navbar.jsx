import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex flex-col gap-4 items-center bg-light-blue min-w-64 text-white min-h-svh">
      <header>
        <img src="src\assets\img\timer.svg" alt="Logo" className="flexmb-4 w-16 pt-4" />
      </header>
      <main>
        <ul className='flex flex-col items-center gap-2'>
          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/">Wszystkie zadania</Link></li>
          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/current">Aktualne zadania</Link></li>
          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/priority">Priorytetowe zadania</Link></li>
          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/side">Poboczne zadania</Link></li>
          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md"><Link to="/notes">Notatki</Link></li>
        </ul>
      </main>
      <footer className='flex items-center text-center p-4 border-t border-gray-300 mt-auto h-16 bottom-0'>
        <span>
          Wykonał Mateusz Mamczur
        </span>
      </footer>
    </nav>
  )
}

export default Navbar