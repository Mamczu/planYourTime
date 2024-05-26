// Notes.jsx
import { useState } from 'react';
import Note from '@/components/Note';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Notes() {
  const [notes, setNotes] = useState([
    { title: 'Pierwsza notatka', description: 'Notuję' },
    { title: 'Druga notatka', description: 'Dalej notuję' },
    { title: 'Trzecia notatka', description: 'Znowu notuję' },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', description: '' });

  const handleAddNote = () => {
    setNotes([...notes, newNote]);
    setModalIsOpen(false);
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4 w-full p-8 bg-neutral-200">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Notatki</h1>
        <button
          onClick={handleOpenModal}
          className="flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-light-blue"
        >
          <span>Dodaj notatkę</span>
        </button>
      </header>
      <main>
        {notes.map((note, index) => (
          <Note
            key={index}
            {...note}
            onDelete={() => handleDeleteNote(index)}
          />
        ))}
      </main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Note Modal"
        className="rounded-md border border-gray-400 p-6"
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            width: '33%',
            height: '33%',
            position: 'relative',
            margin: 'auto',
            background: '#fff',
          },
        }}
      >
        <div className="flex flex-row justify-between">
          <div>
            <h2>Dodaj nową notatkę</h2>
          </div>
          <div>
            <button onClick={handleCloseModal}>X</button>
          </div>
        </div>
        <form onSubmit={handleAddNote} className="flex flex-col p-2 gap-2">
          <div className="flex flex-col gap-2">
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              name="title"
              value={newNote.title}
              onChange={handleInputChange}
              placeholder="Tytuł notatki"
            />
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              name="description"
              value={newNote.description}
              onChange={handleInputChange}
              placeholder="Opis notatki"
            />
          </div>
          <div className="flex">
            <button
              className="flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-light-blue"
              type="submit"
            >
              Dodaj notatkę
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Notes;
