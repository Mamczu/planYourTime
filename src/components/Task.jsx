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
      <div className="flex flex-col gap-1">
        <div>
          <h3 className="text-lg font-bold">{task.name}</h3>
        </div>
        <div>
          <span>Data ważności: {task.date}</span>
        </div>
        <div>
          <span>Opis: {task.description}</span>
        </div>
        <div>
          <span>Typ zadania: {task.type}</span>
        </div>
      </div>

      <div className="flex justify-end">
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
