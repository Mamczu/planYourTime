import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormValid(true);

    if (email !== 'admin@admin.com' || password !== 'Haslo123!') {
      setIsFormValid(false);
      return;
    }

    onLogin();
    navigate('/boards');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-navy-blue min-h-screen w-full">
      <header className="flex flex-col items-center justify-center mb-4">
        <div className="w-16 h-16">
          <img src="src\assets\img\timer.svg" alt="Logo" />
        </div>
        <div>
          <span className=" text-white text-2xl">Plan your time</span>
        </div>
      </header>

      <main className="flex flex-col w-full px-10 py-8 gap-2 bg-white rounded-2xl shadow-md max-w-md">
        <div className="flex items-center justify-center">
          <span className=" text-black text-2xl font-semibold">Logowanie</span>
        </div>

        {!isFormValid && (
          <div className="p-2 bg-red-600 text-white text-center rounded-md">
            <span>Nieprawidłowy email lub hasło</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div>
              <label className="text-gray-600" htmlFor="email">
                Email
              </label>
            </div>
            <div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border p-2 rounded-md w-full ${
                  isFormValid ? 'border-gray-300' : 'border-red-500'
                }`}
                placeholder="Wprowadź adres email"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <div>
              <label className="text-gray-600" htmlFor="password">
                Hasło
              </label>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`border p-2 rounded-md w-full ${
                isFormValid ? 'border-gray-300' : 'border-red-500'
              }`}
              placeholder="Wprowadź hasło"
              required
            />
          </div>

          <div className="submit mb-4">
            <button
              type="submit"
              className="btn-rounded text-white bg-light-blue p-2 rounded-md w-full"
            >
              Zaloguj
            </button>
          </div>
        </form>

        <footer className="flex flex-col gap-4 text-gray-600 text-sm">
          <div className="flex justify-center gap-1">
            <span>Zapomniałeś hasła?</span>
            <a href="/reset-password" className="text-light-blue">
              Resetuj hasło
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
export default Login;
