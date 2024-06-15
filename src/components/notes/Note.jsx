import PropTypes from 'prop-types';

const Note = ({ title, content, onClick }) => {
  return (
    <div
      className="bg-gray-100 text-gray-800 p-4 rounded-md mb-4 w-full cursor-pointer border border-gray-300 shadow-lg"
      onClick={onClick}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Note;
