import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="flex flex-col gap-4 items-center bg-navy-blue min-w-64 text-white min-h-screen">
      <header>
        <img
          src="src/assets/img/timer.svg"
          alt="Logo"
          className="mb-4 w-16 pt-4"
        />
      </header>
      <main>
        <ul className="flex flex-col items-center gap-2">
          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
            <Link to="/boards">Tablice</Link>
          </li>

          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
            <Link to="/allTasks">Wszystkie zadania</Link>
          </li>

          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
            <Link to="/currentTasks">Aktualne zadania</Link>
          </li>

          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
            <Link to="/priorityTasks">Priorytetowe zadania</Link>
          </li>

          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
            <Link to="/sideTasks">Poboczne zadania</Link>
          </li>

          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
            <Link to="/notes">Notatki</Link>
          </li>

          <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
            <Link to="/calendar">Kalendarz</Link>
          </li>
        </ul>
      </main>
      <footer className="flex w-full items-center text-center justify-center p-4 border-t border-gray-300 mt-auto h-16 bottom-0">
        <button
          onClick={onLogout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
        >
          Wyloguj
        </button>
      </footer>
    </nav>
  );
};

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
