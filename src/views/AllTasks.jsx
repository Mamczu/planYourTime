import { useState } from 'react';
import Task from '@/components/Task';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function AllTasks() {
  const [tasks, setTasks] = useState([
    {
      title: 'Ważne zadanie',
      date: '2022-01-01',
      description: 'Bardzo ważne zadanie',
      label: 'Priorytetowe',
      labelColor: 'bg-red-500',
    },
    {
      title: 'Aktualnie wykonywane',
      date: '2022-01-01',
      description: 'Aktualnie wykonywane',
      label: 'Aktualne',
      labelColor: 'bg-blue-600',
    },
    {
      title: 'Poboczne zadanie',
      date: '2022-01-01',
      description: 'Mało istotne zadanie',
      label: 'Poboczne',
      labelColor: 'bg-green-500',
    },
    {
      title: 'Kolejne aktualnie wykonywane zadanie',
      date: '2022-01-01',
      description: 'Właśnie to robię',
      label: 'Aktualne',
      labelColor: 'bg-blue-600',
    },
    {
      title: 'Jeszcze jedno ważne zadanie',
      date: '2022-01-01',
      description: 'Super ważne zadanie',
      label: 'Priorytetowe',
      labelColor: 'bg-red-500',
    },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    date: '',
    description: '',
    label: '',
  });

  const handleAddTask = () => {
    let labelColor;
    switch (newTask.label) {
      case 'Priorytetowe':
        labelColor = 'bg-red-500';
        break;
      case 'Aktualne':
        labelColor = 'bg-blue-600';
        break;
      case 'Poboczne':
        labelColor = 'bg-green-500';
        break;
      default:
        labelColor = 'bg-gray-500';
    }
    setTasks([...tasks, { ...newTask, labelColor }]);
    setModalIsOpen(false);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4 w-full p-8 bg-neutral-200">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Wszystkie zadania</h1>
        <button
          onClick={handleOpenModal}
          className="flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-light-blue"
        >
          <span>Dodaj zadanie</span>
        </button>
      </header>
      <main>
        {tasks.map((task, index) => (
          <div key={index}>
            <Task {...task} onDelete={() => handleDeleteTask(index)} />
          </div>
        ))}
      </main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Task Modal"
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
            <h2>Dodaj nowe zadanie</h2>
          </div>
          <div>
            <button onClick={handleCloseModal}>X</button>
          </div>
        </div>
        <form onSubmit={handleAddTask} className="flex flex-col p-2 gap-2">
          <div className="flex flex-col gap-2">
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              placeholder="Tytuł zadania"
            />
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              name="date"
              value={newTask.date}
              onChange={handleInputChange}
              placeholder="Data zadania"
            />
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
              placeholder="Opis zadania"
            />
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              name="label"
              value={newTask.label}
              onChange={handleInputChange}
            >
              <option value="">Wybierz etykietę</option>
              <option value="Priorytetowe">Priorytetowe</option>
              <option value="Aktualne">Aktualne</option>
              <option value="Poboczne">Poboczne</option>
            </select>
          </div>
          <div className="flex">
            <button
              className="flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-light-blue"
              type="submit"
            >
              Dodaj zadanie
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AllTasks;
