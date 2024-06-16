import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import Navbar from '@/components/layout/Navbar';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const CalendarView = ({ onLogout }) => {
  const [value, onChange] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [note, setNote] = useState('');
  const [error, setError] = useState(null);

  const handleClickDay = (value) => {
    setSelectedDate(value);
    setNote(notes[value] || '');
    setModalIsOpen(true);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    if (!note) {
      setError('Notatka nie może być pusta');
      return;
    }
    setNotes({ ...notes, [selectedDate]: note });
    setModalIsOpen(false);
    setError(null);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setError(null);
  };

  const handleDeleteNote = (date) => {
    const newNotes = { ...notes };
    delete newNotes[date];
    setNotes(newNotes);
  };

  return (
    <div className="flex">
      <aside>
        <Navbar onLogout={onLogout}></Navbar>
      </aside>
      <div className="flex flex-col items-center p-5 w-full">
        <h1 className="text-2xl font-bold mb-4">Kalendarz</h1>
        <Calendar
          className="w-full m-0 border-none"
          onChange={onChange}
          value={value}
          onClickDay={handleClickDay}
          tileContent={({ date, view }) =>
            view === 'month' && notes[date] ? <p>{notes[date]}</p> : null
          }
        />
        <div className="w-full p-6 mt-4">
          {Object.entries(notes).map(([date, note]) => (
            <div
              key={date}
              className="flex items-center justify-between px-4 py-2 mb-4 bg-gray-100 rounded-lg shadow-md"
            >
              <div className="flex flex-row justify-between w-full items-center">
                <div>
                  <span className="text-lg">
                    {new Date(date).toLocaleDateString()} - {note}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => handleDeleteNote(date)}
                    className="text-red-600 font-semibold"
                  >
                    Usuń
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Note Modal"
          className="bg-white rounded-md border border-gray-200 p-4 shadow-lg"
          style={{
            overlay: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              position: 'relative',
              margin: 'auto',
              padding: '2rem',
            },
          }}
        >
          <div className="flex flex-col gap-4 w-full items-center text-center">
            <div className="flex">
              <span className="font-semibold text-xl">
                Dodaj notatkę dla dnia{' '}
                {selectedDate && new Date(selectedDate).toLocaleDateString()}
              </span>
            </div>

            <form
              onSubmit={handleSaveNote}
              className="flex flex-col gap-4 w-full"
            >
              <div className="flex flex-col items-start">
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <div className="flex flex-row gap-2 justify-center w-full">
                <div>
                  <button
                    className="py-2 px-4 border-none cursor-pointer rounded-md text-white bg-blue-500 hover:bg-blue-700 transition-colors"
                    type="submit"
                  >
                    Zapisz notatkę
                  </button>
                </div>
                <div>
                  <button
                    className="py-2 px-4 border-none cursor-pointer rounded-md text-white bg-red-500 hover:bg-red-700 transition-colors"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Anuluj
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

CalendarView.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default CalendarView;
