const ArchivedTasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Archived Task 1',
      description: 'Completed Description 1',
      date: '2023-01-01',
    },
    {
      id: 2,
      title: 'Archived Task 2',
      description: 'Completed Description 2',
      date: '2023-01-02',
    },
    // Add more archived tasks as needed
  ];

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Archived Tasks</h1>
      </header>
      <main>
        {tasks.map((task) => (
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

export default ArchivedTasks;
