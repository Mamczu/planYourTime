import React from 'react'

function Task({ title, date, description, label, labelColor }) {
  return (
    <div className="p-4 mb-4 border rounded-md bg-white shadow">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2">{description}</p>
      <span className={`inline-block mt-2 py-1 px-2 rounded bg-red-500 text-white text-xs uppercase font-bold ${labelColor}`}>{label}</span>
      <div className="flex justify-end">
        <button className='flex py-2 px-3 mt-4 border-none cursor-pointer rounded-md items-center text-white bg-dark-red'>
          <span>Usuń</span>
        </button>
      </div>
    </div>
  )
}

export default Task