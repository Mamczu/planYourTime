import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import TaskManager from '@/views/Tasks/TaskManager';
import ArchivedTasks from '@/views/Tasks/ArchivedTasks';

import Notes from '@/views/Notes';
import Boards from '@/views/Boards';
import Board from '@/components/Board';
import CalendarView from '@/views/CalendarView';
import Login from '@/views/Login';
import ResetPassword from '@/views/ResetPassword';

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
      <Routes>
        <Route
          path="/boards"
          element={
            isAuthenticated ? (
              <Boards onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/tasks"
          element={
            isAuthenticated ? (
              <TaskManager onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/archivedTasks"
          element={
            isAuthenticated ? (
              <ArchivedTasks onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/board/:id"
          element={
            isAuthenticated ? (
              <Board onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/notes"
          element={
            isAuthenticated ? (
              <Notes onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/calendar"
          element={
            isAuthenticated ? (
              <CalendarView onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/boards" />} />{' '}
        {/* Catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;
