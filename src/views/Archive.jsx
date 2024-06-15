import PropTypes from 'prop-types';

const Logout = () => {
  return (
    <div className="logout">
      <h2>Archiwum zadań</h2>
    </div>
  );
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Logout;
