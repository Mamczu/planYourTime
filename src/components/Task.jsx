import PropTypes from 'prop-types';

const Task = ({ task, isSelected, onSelect, onEdit }) => {
  const handleTaskClick = () => {
    onSelect(task);
  };

  return (
    <div
      className={`border p-4 mb-4 rounded cursor-pointer ${
        isSelected ? 'bg-blue-100 text-black' : 'bg-white text-black'
      }`}
      onClick={handleTaskClick}
    >
      <h3 className="text-lg font-bold">{task.name}</h3>
      <p>Data ważności: {task.date}</p>
      <p>Opis: {task.description}</p>
      <p>Typ zadania: {task.type}</p>
      <div className="flex space-x-2">
        <div className="flex flex-row items-center justify-between">
          <div className="flex"></div>
          <div className="flex">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(task);
              }}
              className="bg-dark-green text-white px-4 py-2 rounded"
            >
              Edycja
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Task;
