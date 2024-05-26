import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function CalendarView() {
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

  const handleSaveNote = () => {
    if (!note) {
      setError('Please fill in the note');
      return;
    }
    setNotes({ ...notes, [selectedDate]: note });
    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleDeleteNote = (date) => {
    const newNotes = { ...notes };
    delete newNotes[date];
    setNotes(newNotes);
  };

  return (
    <div className="flex flex-col">
      <Calendar
        className="w-full m-0 border-none"
        onChange={onChange}
        value={value}
        onClickDay={handleClickDay}
        tileContent={({ date, view }) =>
          view === 'month' && notes[date] ? <p>{notes[date]}</p> : null
        }
      />
      <div className=" w-full p-6">
        {Object.entries(notes).map(([date, note]) => (
          <div key={date} className="flex flex-row gap-2">
            <div>
              <button onClick={() => handleDeleteNote(date)}>
                <strong>[ X ]</strong>
              </button>
            </div>
            <div>
              <span>
                {new Date(date).toLocaleDateString()} - {note}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Note Modal"
        className="rounded-md border border-gray-400 p-4"
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            width: '30%',
            height: '30%',
            position: 'relative',
            margin: 'auto',
          },
        }}
      >
        <div className="flex flex-row justify-between">
          <div>
            <h2>
              Dodaj notatkę dla dnia{' '}
              {selectedDate && new Date(selectedDate).toLocaleDateString()}
            </h2>
          </div>
          <div>
            <button onClick={handleCloseModal}>X</button>
          </div>
        </div>
        <form onSubmit={handleSaveNote} className="flex flex-col py-4">
          <div>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            {error && <p>{error}</p>}
          </div>
          <div>
            <button
              className="flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-light-blue"
              type="submit"
            >
              Zapisz notatkę
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default CalendarView;
