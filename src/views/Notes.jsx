import Note from '@/components/Note';

function Notes() {
  const notes = [
    { title: 'Pierwsza notatka', description: 'Notuję' },
    { title: 'Druga notatka', description: 'Dalej notuję' },
    { title: 'Trzecia notatka', description: 'Znowu notuję' },
  ];

  return (
    <div className="flex flex-col gap-4 w-full p-8 bg-neutral-200">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Notatki</h1>
        <button className="flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-light-blue">
          <span>Dodaj notatkę</span>
        </button>
      </header>
      <main>
        {notes.map((task, index) => (
          <Note key={index} {...task} />
        ))}
      </main>
    </div>
  );
}

export default Notes;
