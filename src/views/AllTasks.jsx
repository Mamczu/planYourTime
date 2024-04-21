import React from 'react'
import Task from '@/components/Task'

function AllTasks() {
  const tasks = [
    { title: 'Ważne zadanie', date: '2022-01-01', description: 'Bardzo ważne zadanie', label: 'Priorytetowe', labelColor: 'bg-red-500' },
    { title: 'Aktualnie wykonywane', date: '2022-01-01', description: 'Aktualnie wykonywane', label: 'Aktualne', labelColor: 'bg-blue-600' },
    { title: 'Poboczne zadanie', date: '2022-01-01', description: 'Mało istotne zadanie', label: 'Poboczne', labelColor: 'bg-green-500' },
    { title: 'Kolejne aktualnie wykonywane zadanie', date: '2022-01-01', description: 'Właśnie to robię', label: 'Aktualne', labelColor: 'bg-blue-600' },
    { title: 'Jeszcze jedno ważne zadanie', date: '2022-01-01', description: 'Super ważne zadanie', label: 'Priorytetowe', labelColor: 'bg-red-500' },
  ]

  return (
    <div className='flex flex-col gap-4 w-full p-8 '>
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Wszystkie zadania</h1>
      <button className='flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-light-blue'>
        <span>Dodaj zadanie</span>
      </button>
      </header>
      <main>
        {tasks.map((task, index) => (
          <Task key={index} {...task} />
        ))}
      </main>
    </div>
  )
}

export default AllTasks