import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route path="/current" element={<CurrentTasks />} />
          <Route path="/priority" element={<PriorityTasks />} />
          <Route path="/side" element={<SideTasks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/" element={<AllTasks />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
