import { useState } from 'react';

const TaskManager = () => {
  const [filter, setFilter] = useState('all');

  const tasks = [
    {
      id: 1,
      type: 'current',
      title: 'Current Task 1',
      description: 'Description 1',
      date: '2023-01-01',
    },
    {
      id: 2,
      type: 'priority',
      title: 'Priority Task 1',
      description: 'Description 2',
      date: '2023-01-02',
    },
    {
      id: 3,
      type: 'side',
      title: 'Side Task 1',
      description: 'Description 3',
      date: '2023-01-03',
    },
    // Add more tasks as needed
  ];

  const filteredTasks =
    filter === 'all' ? tasks : tasks.filter((task) => task.type === filter);

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <div>
          <button onClick={() => setFilter('all')} className="mr-2">
            All
          </button>
          <button onClick={() => setFilter('current')} className="mr-2">
            Current
          </button>
          <button onClick={() => setFilter('priority')} className="mr-2">
            Priority
          </button>
          <button onClick={() => setFilter('side')} className="mr-2">
            Side
          </button>
        </div>
      </header>
      <main>
        {filteredTasks.map((task) => (
          <div key={task.id} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p>{task.date}</p>
            <p>{task.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TaskManager;
