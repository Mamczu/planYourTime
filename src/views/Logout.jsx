import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="logout">
      <h2>Zostałeś wylogowany</h2>
      <button onClick={handleLogout}>
        Kliknij aby przejść do strony logowania
      </button>
    </div>
  );
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Logout;
