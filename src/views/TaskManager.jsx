import { useState } from 'react';
import Task from '@/components/Task';
import Navbar from '@/components/layout/Navbar';
import PropTypes from 'prop-types';

const TaskManager = ({ onLogout }) => {
  const [tasks, setTasks] = useState([
    {
      name: 'Zadanie 1',
      date: '01.01.2030',
      description: 1,
      type: 'Priorytetowe',
    },
    {
      name: 'Zadanie 2',
      date: '01.01.2030',
      description: 5,
      type: 'Priorytetowe',
    },
    {
      name: 'Zadanie 3',
      date: '01.01.2026',
      description: 10,
      type: 'Poboczne',
    },
    {
      name: 'Zadanie 4',
      date: '01.01.2026',
      description: 10,
      type: 'Poboczne',
    },
    {
      name: 'Zadanie 5',
      date: '01.01.2026',
      description: 10,
      type: 'Poboczne',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
  const [currentType, setCurrentType] = useState('Wszystkie');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTaskTypeClick = (type) => {
    setCurrentType(type);
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (currentType === 'Wszystkie') return true;
      return task.type === currentType;
    })
    .filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setModalOpen(false);
  };

  const handleEditTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.name === taskToEdit.name ? updatedTask : task))
    );
    setEditModalOpen(false);
  };

  const handleSelectTask = (selectedTask) => {
    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.includes(selectedTask)
        ? prevSelectedTasks.filter((task) => task !== selectedTask)
        : [...prevSelectedTasks, selectedTask]
    );
  };

  const handleDeleteSelected = () => {
    setTasks(tasks.filter((task) => !selectedTasks.includes(task)));
    setSelectedTasks([]);
  };

  const handleEditClick = (task) => {
    setTaskToEdit(task);
    setEditModalOpen(true);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex">
      <aside>
        <Navbar onLogout={onLogout}></Navbar>
      </aside>
      <div className="flex flex-col p-8 w-full gap-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold">Menadżer zadań</span>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Wprowadź adres e-mail"
                value={searchTerm}
                onChange={handleSearch}
                className="border p-2"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Wyszukaj
              </button>
            </div>

            <div className="flex">
              <button
                onClick={() => handleTaskTypeClick('Wszystkie')}
                className={`px-4 py-2 rounded ${
                  currentType === 'Wszystkie'
                    ? 'bg-light-blue text-white'
                    : 'bg-white text-black'
                }`}
              >
                Wszystkie <span>{tasks.length}</span>
              </button>
              <button
                onClick={() => handleTaskTypeClick('Priorytetowe')}
                className={`px-4 py-2 rounded ${
                  currentType === 'Priorytetowe'
                    ? 'bg-light-blue text-white'
                    : 'bg-white text-black'
                }`}
              >
                Priorytetowe{' '}
                <span>
                  {tasks.filter((task) => task.type === 'Priorytetowe').length}
                </span>
              </button>
              <button
                onClick={() => handleTaskTypeClick('Poboczne')}
                className={`px-4 py-2 rounded ${
                  currentType === 'Poboczne'
                    ? 'bg-light-blue text-white'
                    : 'bg-white text-black'
                }`}
              >
                Poboczne{' '}
                <span>
                  {tasks.filter((task) => task.type === 'Poboczne').length}
                </span>
              </button>
              <button
                onClick={() => handleTaskTypeClick('Gotowe')}
                className={`px-4 py-2 rounded ${
                  currentType === 'Gotowe'
                    ? 'bg-light-blue text-white'
                    : 'bg-white text-black'
                }`}
              >
                Gotowe{' '}
                <span>
                  {tasks.filter((task) => task.type === 'Gotowe').length}
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              + Utwórz nowe zadanie
            </button>
            <button
              onClick={handleDeleteSelected}
              className="bg-red-500 text-white px-4 py-2 rounded"
              disabled={selectedTasks.length === 0}
            >
              Usuń zaznaczone
            </button>
          </div>
        </div>
        <div>
          {currentTasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              isSelected={selectedTasks.includes(task)}
              onSelect={handleSelectTask}
              onEdit={handleEditClick}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(filteredTasks.length / tasksPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-1 rounded ${
                  currentPage === index + 1
                    ? 'bg-light-blue text-white'
                    : 'bg-white text-black'
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
        {modalOpen && (
          <NewTaskModal
            onClose={() => setModalOpen(false)}
            onSave={handleNewTask}
          />
        )}
        {editModalOpen && (
          <EditTaskModal
            onClose={() => setEditModalOpen(false)}
            onSave={handleEditTask}
            task={taskToEdit}
          />
        )}
      </div>
    </div>
  );
};

const NewTaskModal = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = () => {
    onSave({ name, date, description, type });
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
          type="text"
          placeholder="Opis"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

const EditTaskModal = ({ onClose, onSave, task }) => {
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(task.date);
  const [description, setDescription] = useState(task.description);
  const [type, setType] = useState(task.type);

  const handleSubmit = () => {
    onSave({ ...task, name, date, description, type });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edytuj Zadanie</h2>
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
          type="text"
          placeholder="Opis"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

EditTaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

export default TaskManager;
