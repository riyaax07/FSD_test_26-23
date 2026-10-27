import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StuDashboard from './student/studashboard';
import AttemptQuiz from './student/attemptquiz';
import ViewResult from './student/viewresult';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', padding: '20px' }}>
        <nav style={{ paddingBottom: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/student">Student Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to the App. Navigate to Student Dashboard above.</h2>} />
          <Route path="/student" element={<StuDashboard />} />
          <Route path="/student/attempt-quiz" element={<AttemptQuiz />} />
          <Route path="/student/view-result" element={<ViewResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;