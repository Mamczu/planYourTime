import { useState } from 'react';
import Task from '@/components/Task';
import Navbar from '@/components/layout/Navbar';
import PropTypes from 'prop-types';

const TaskManager = ({ onLogout }) => {
  const [tasks, setTasks] = useState([
    {
      name: 'Zadanie 1',
      date: '01.01.2030',
      maxUsers: 1,
      type: 'Priorytetowe',
    },
    {
      name: 'Zadnie 2',
      date: '01.01.2030',
      maxUsers: 5,
      type: 'Priorytetowe',
    },
    {
      name: 'Zadanie 3',
      date: '01.01.2026',
      maxUsers: 10,
      type: 'Poboczne',
    },
    {
      name: 'Zadanie 4',
      date: '01.01.2026',
      maxUsers: 10,
      type: 'Poboczne',
    },
    {
      name: 'Zadanie 5',
      date: '01.01.2026',
      maxUsers: 10,
      type: 'Poboczne',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTaskTypeClick = () => {
    //TODO
  };

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setModalOpen(false);
  };

  return (
    <div className="flex">
      <aside>
        <Navbar onLogout={onLogout}></Navbar>
      </aside>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Wszystkie zadania</h1>
        <input
          type="text"
          placeholder="Wyszukaj nazwę"
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 mb-4 w-full"
        />
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => handleTaskTypeClick('Wszystkie')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Wszystkie <span>{tasks.length}</span>
          </button>
          <button
            onClick={() => handleTaskTypeClick('Priorytetowe')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Priorytetowe{' '}
            <span>
              {tasks.filter((task) => task.type === 'Priorytetowe').length}
            </span>
          </button>
          <button
            onClick={() => handleTaskTypeClick('Poboczne')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Poboczne{' '}
            <span>
              {tasks.filter((task) => task.type === 'Poboczne').length}
            </span>
          </button>
          <button
            onClick={() => handleTaskTypeClick('Gotowe')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Gotowe{' '}
            <span>{tasks.filter((task) => task.type === 'Gotowe').length}</span>
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            + Utwórz nowe zadanie
          </button>
        </div>
        <div>
          {filteredTasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </div>
        {modalOpen && (
          <NewTaskModal
            onClose={() => setModalOpen(false)}
            onSave={handleNewTask}
          />
        )}
      </div>
    </div>
  );
};

const NewTaskModal = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [maxUsers, setMaxUsers] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = () => {
    onSave({ name, date, maxUsers, type });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Nowe Zadanie</h2>
        <input
          type="text"
          placeholder="Nazwa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="date"
          placeholder="Data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Maksymalna liczba użytkowników"
          value={maxUsers}
          onChange={(e) => setMaxUsers(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 mb-4 w-full"
        >
          <option value="">Wybierz typ</option>
          <option value="Priorytetowe">Priorytetowe</option>
          <option value="Poboczne">Poboczne</option>
          <option value="Gotowe">Gotowe</option>
        </select>
        <div className="flex space-x-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Zapisz
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
};

TaskManager.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

NewTaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default TaskManager;
