import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AllTasks from '@/views/AllTasks';
import CurrentTasks from '@/views/CurrentTasks';
import PriorityTasks from '@/views/PriorityTasks';
import SideTasks from '@/views/SideTasks';
import Notes from '@/views/Notes';
import Boards from '@/views/Boards';
import Board from '@/components/Board';
import CalendarView from '@/views/CalendarView';
import Login from '@/views/Login';
import ResetPassword from '@/views/ResetPassword';
import Logout from '@/views/Logout';
import Archive from '@/views/Archive';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/currentTasks"
            element={
              isAuthenticated ? <CurrentTasks /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/priorityTasks"
            element={
              isAuthenticated ? <PriorityTasks /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/sideTasks"
            element={isAuthenticated ? <SideTasks /> : <Navigate to="/login" />}
          />
          <Route
            path="/notes"
            element={isAuthenticated ? <Notes /> : <Navigate to="/login" />}
          />
          <Route
            path="/allTasks"
            element={isAuthenticated ? <AllTasks /> : <Navigate to="/login" />}
          />
          <Route
            path="/boards"
            element={isAuthenticated ? <Boards /> : <Navigate to="/login" />}
          />
          <Route
            path="/board/:id"
            element={isAuthenticated ? <Board /> : <Navigate to="/login" />}
          />
          <Route
            path="/calendar"
            element={
              isAuthenticated ? <CalendarView /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/archive"
            element={isAuthenticated ? <Archive /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="*" element={<Navigate to="/allTasks" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
