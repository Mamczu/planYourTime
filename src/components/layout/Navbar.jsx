import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ onLogout }) => {
  return (
    <div className="sticky gap-5 w-64 bg-navy-blue text-white min-h-screen overflow-y-auto top-0">
      <div className="flex flex-col pt-12 gap-5 items-center w-full h-[100vh]">
        <header>
          <img src="src/assets/img/timer.svg" alt="Logo" className="w-16" />
        </header>

        <nav>
          <ul className="flex flex-col items-center gap-2">
            <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
              <Link to="/boards">Tablice</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
              <Link to="/tasks">Menadżer zadań</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
              <Link to="/archivedTasks">Archiwum zadań</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
              <Link to="/notes">Notatki</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black p-2 rounded-md">
              <Link to="/calendar">Kalendarz</Link>
            </li>
          </ul>
        </nav>

        <footer className="flex flex-row items-center w-full py-3 px-5 border-t border-white-20 border-dotted mt-auto h-16 bottom-0">
          <div className="text-center w-full">
            <button
              onClick={onLogout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
            >
              Wyloguj
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
