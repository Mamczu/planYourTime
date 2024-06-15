import { useState } from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleTaskClick = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div
      className={`border p-4 mb-4 rounded cursor-pointer ${
        isHighlighted ? 'bg-light-blue' : ''
      }`}
      onClick={handleTaskClick}
    >
      <h3 className="text-lg font-bold">{task.name}</h3>
      <p>Data ważności: {task.date}</p>
      <p>Maksymalna liczba użytkowników: {task.maxUsers}</p>
      <p>Typ zadania: {task.type}</p>
      <div className="flex space-x-2">
        <button className="bg-gray-200 px-4 py-2 rounded">Pokaż</button>
        <button className="bg-gray-200 px-4 py-2 rounded">Edycja</button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    maxUsers: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
