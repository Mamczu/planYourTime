// eslint-disable-next-line react/prop-types
function Note({ title, description, onDelete }) {
  return (
    <div className="p-4 mb-4 border rounded-md bg-white shadow">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2">{description}</p>

      <div className="flex justify-end">
        <button
          onClick={onDelete}
          className="flex py-2 px-3 mt-4 border-none cursor-pointer rounded-md items-center text-white bg-dark-red"
        >
          <span>Usuń</span>
        </button>
      </div>
    </div>
  );
}

export default Note;
