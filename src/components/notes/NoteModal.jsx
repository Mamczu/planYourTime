import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const NoteModal = ({ note, isOpen, onClose, onSave, onDelete }) => {
  const [editedTitle, setEditedTitle] = useState(note ? note.title : '');
  const [editedContent, setEditedContent] = useState(note ? note.content : '');

  useEffect(() => {
    if (note) {
      setEditedTitle(note.title);
      setEditedContent(note.content);
    }
  }, [note]);

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    const newNote = note
      ? { ...note, title: editedTitle, content: editedContent }
      : { id: Date.now(), title: editedTitle, content: editedContent };
    onSave(newNote);
    onClose();
  };

  const handleDelete = () => {
    if (note) {
      onDelete(note.id);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-8 w-1/2">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {note ? 'Edytuj notatkę' : 'Dodaj notatkę'}
          </h2>
          <button onClick={onClose} className="text-red-500">
            Anuluj
          </button>
        </header>
        <main>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Title"
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows="10"
            placeholder="Content"
          />
        </main>
        <footer className="flex justify-end mt-4 gap-2">
          <button
            onClick={handleSave}
            className="bg-dark-green text-white px-4 py-2 rounded"
          >
            Zapisz notatkę
          </button>
          {note && (
            <button
              onClick={handleDelete}
              className="bg-dark-red text-white px-4 py-2 rounded"
            >
              Usuń notatkę
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

NoteModal.propTypes = {
  note: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteModal;
