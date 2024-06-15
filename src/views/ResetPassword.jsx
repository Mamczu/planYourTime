import { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormValid(false);
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
          <span className=" text-black text-2xl font-semibold">
            Resetowanie hasła
          </span>
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

          <div className="submit mb-4">
            <button
              type="submit"
              className="btn-rounded text-white bg-light-blue p-2 rounded-md w-full"
            >
              Resetuj hasło
            </button>
          </div>
        </form>

        <footer className="flex flex-col gap-4 text-gray-600 text-sm">
          <div className="flex justify-center gap-1">
            <span>Pamiętasz hasło?</span>
            <a href="/login" className="text-light-blue">
              Zaloguj się
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ResetPassword;
