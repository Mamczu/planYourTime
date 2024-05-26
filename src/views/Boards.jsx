import { useState } from 'react';
import { Link } from 'react-router-dom';

function Boards() {
  const [boards, setBoards] = useState([
    {
      id: '1',
      name: 'Board 1',
    },
    {
      id: '2',
      name: 'Board 2',
    },
  ]);

  const addBoard = () => {
    const name = prompt('Enter board name');
    const newBoard = { id: Date.now().toString(), name };
    setBoards((prevBoards) => [...prevBoards, newBoard]);
  };

  return (
    <div className="flex flex-col gap-4 w-full p-8 bg-neutral-200">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Tablice</h1>
        <button
          onClick={addBoard}
          className="flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-dark-green"
        >
          Dodaj tablicę
        </button>
      </header>
      <main className="flex flex-wrap">
        {boards.map((board) => (
          <Link
            key={board.id}
            to={`/board/${board.id}`}
            className="border p-4 m-2 flex-grow text-white bg-light-blue rounded-md hover:bg-gray-300 hover:text-black w-1/4"
          >
            <h2>{board.name}</h2>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Boards;
