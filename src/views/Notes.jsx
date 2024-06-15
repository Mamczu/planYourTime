import { useState } from 'react';
import Note from '@/components/notes/Note';
import NoteModal from '@/components/notes/NoteModal';
import Navbar from '@/components/layout/Navbar';
import PropTypes from 'prop-types';

const Notes = ({ onLogout }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Trening',
      content:
        '1) Rozgrzewka\n2) Przysiady\n3) Pompki\n4) Wiosłowanie\n5) Martwy ciąg\n6) Brzuszki\n7) Bieg na bieżni\n8) Skakanka\n9) Podciąganie\n10) Rozciąganie',
    },
    {
      id: 2,
      title: 'Studia',
      content:
        '1) Nauka matematyki\n2) Przygotowanie do egzaminu z fizyki\n3) Pisanie pracy dyplomowej\n4) Udział w konferencji\n5) Przygotowanie prezentacji\n6) Przegląd literatury\n7) Konsultacje z promotorem\n8) Praca w laboratorium\n9) Nauka programowania\n10) Zaliczenie przedmiotu',
    },
    {
      id: 3,
      title: 'Naprawa samochodu',
      content:
        '1) Wymiana oleju\n2) Wymiana filtrów\n3) Sprawdzenie hamulców\n4) Wymiana świec zapłonowych\n5) Kontrola poziomu płynów\n6) Sprawdzenie akumulatora\n7) Wymiana opon\n8) Naprawa układu wydechowego\n9) Sprawdzenie zawieszenia\n10) Diagnostyka komputerowa',
    },
    {
      id: 4,
      title: 'Remont domu',
      content:
        '1) Malowanie ścian\n2) Wymiana podłóg\n3) Montaż nowych drzwi\n4) Instalacja oświetlenia\n5) Remont łazienki\n6) Kuchnia – wymiana mebli\n7) Naprawa dachu\n8) Izolacja termiczna\n9) Instalacja paneli słonecznych\n10) Prace ogrodowe',
    },
    {
      id: 5,
      title: 'Przepis na naleśniki',
      content:
        '1) 1 szklanka mąki\n2) 2 jajka\n3) 1 szklanka mleka\n4) 0,5 szklanki wody gazowanej\n5) 2 łyżki oleju\n6) Szczypta soli\n7) Szczypta cukru\n8) Rozgrzać patelnię\n9) Smażyć naleśniki\n10) Podawać z ulubionymi dodatkami',
    },
  ]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [messages, setMessages] = useState([]);

  const addMessage = (content, type) => {
    const message = { content, type };
    setMessages((prevMessages) => [message, ...prevMessages]);

    const timeoutId = setTimeout(() => {
      removeMessage(message);
    }, 4000);

    message.timeoutId = timeoutId;
  };

  const removeMessage = (message) => {
    setMessages((prevMessages) =>
      prevMessages.filter((msg) => msg !== message)
    );
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleCloseModal = () => {
    setSelectedNote(null);
    setIsAdding(false);
  };

  const handleSaveNote = (note) => {
    if (selectedNote) {
      setNotes(notes.map((n) => (n.id === note.id ? note : n)));
      addMessage('Notatka została pomyślnie edytowana!', 'success');
    } else {
      setNotes([...notes, note]);
      addMessage('Notatka została pomyślnie dodana!', 'success');
    }
  };

  const handleAddNote = () => {
    setIsAdding(true);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    addMessage('Notatka została pomyślnie usunięta!', 'success');
  };

  return (
    <div className="flex">
      <aside>
        <Navbar onLogout={onLogout}></Navbar>
      </aside>
      <div className="w-full p-8">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Notatki</h1>
          <button
            onClick={handleAddNote}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Dodaj notatkę
          </button>
        </header>
        <main className="grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {notes.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              content={note.content}
              onClick={() => handleNoteClick(note)}
            />
          ))}
        </main>
        {(selectedNote || isAdding) && (
          <NoteModal
            note={selectedNote}
            isOpen={!!selectedNote || isAdding}
            onClose={handleCloseModal}
            onSave={handleSaveNote}
            onDelete={handleDeleteNote}
          />
        )}
      </div>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`fixed flex flex-row items-center justify-between right-8 bottom-1/3 p-4 gap-4 rounded-md shadow-xl z-50 ${
              message.type === 'success' ? 'bg-teal-50' : 'bg-red-50'
            }`}
            style={{ bottom: `${(index + 1) * 5}rem` }}
            onClick={() => removeMessage(message)}
          >
            <div className="flex flex-row items-center gap-5">
              <div>
                <span
                  className={`${
                    message.type === 'success'
                      ? 'text-teal-800 font-semibold'
                      : 'text-red-800 font-semibold'
                  }`}
                >
                  {message.content}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Notes.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
export default Notes;
