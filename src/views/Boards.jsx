import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import PropTypes from 'prop-types';

const Boards = ({ onLogout }) => {
  const [boards, setBoards] = useState([
    {
      id: '1',
      name: 'Projekt',
    },
    {
      id: '2',
      name: 'Uczelnia',
    },
    {
      id: '3',
      name: 'Rozwój osobisty',
    },
    {
      id: '4',
      name: 'Planowanie wakacji',
    },
  ]);

  const [newBoardName, setNewBoardName] = useState('');
  const [isAddingBoard, setIsAddingBoard] = useState(false);

  const addBoard = () => {
    setIsAddingBoard(true);
  };

  const handleNewBoardNameChange = (e) => {
    setNewBoardName(e.target.value);
  };

  const handleNewBoardNameSubmit = () => {
    if (newBoardName.trim()) {
      const newBoard = { id: Date.now().toString(), name: newBoardName.trim() };
      setBoards((prevBoards) => [...prevBoards, newBoard]);
    }
    setNewBoardName('');
    setIsAddingBoard(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNewBoardNameSubmit();
    }
  };

  const deleteBoard = (id) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  return (
    <div className="flex">
      <aside>
        <Navbar onLogout={onLogout}></Navbar>
      </aside>
      <div className="flex flex-col gap-4 w-full p-8 bg-neutral-200">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tablice</h1>
          <button
            onClick={addBoard}
            className="flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-dark-green"
          >
            Dodaj tablicę
          </button>
        </header>
        <main className="flex flex-wrap">
          {boards.map((board) => (
            <div
              key={board.id}
              className="relative border p-4 m-2 flex-grow text-white bg-light-blue rounded-md hover:bg-gray-300 hover:text-black w-1/4"
            >
              <Link
                to={`/board/${board.id}`}
                className="flex relative z-10 justify-between items-center"
              >
                <div>
                  <span className="text-md font-semibold">{board.name}</span>
                </div>
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      deleteBoard(board.id);
                    }}
                    className="text-white font-semibold py-1 px-2 rounded-md z-20"
                  >
                    X
                  </button>
                </div>
              </Link>
            </div>
          ))}
          {isAddingBoard && (
            <div className="relative border p-4 m-2 flex-grow text-white bg-light-blue rounded-md hover:bg-gray-300 hover:text-black w-1/4">
              <input
                type="text"
                value={newBoardName}
                onChange={handleNewBoardNameChange}
                onBlur={handleNewBoardNameSubmit}
                onKeyPress={handleKeyPress}
                className="w-full p-2 text-black border-1 outline-none border-none rounded-md"
                placeholder="Wprowadź nazwę tablicy"
                autoFocus
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

Boards.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Boards;
