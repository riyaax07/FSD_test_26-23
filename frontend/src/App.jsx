import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Student Components
import StuDashboard from './student/studashboard';
import AttemptQuiz from './student/attemptquiz';
import ViewResult from './student/viewresult';

// Teacher Components
import CreateQuiz from './teacher/createquiz';
import AddQues from './teacher/addques';
import ViewQuiz from './teacher/viewquiz';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', padding: '20px' }}>
        <nav style={{ paddingBottom: '15px', borderBottom: '1px solid #ccc', marginBottom: '20px', display: 'flex', gap: '20px' }}>
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/student">Student Dashboard</Link>
          <span>|</span>
          <Link to="/teacher/view-quiz">Teacher Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome! Select Student or Teacher dashboard from above.</h2>} />

          {/* Student Routes */}
          <Route path="/student" element={<StuDashboard />} />
          <Route path="/student/attempt-quiz" element={<AttemptQuiz />} />
          <Route path="/student/view-result" element={<ViewResult />} />

          {/* Teacher Routes */}
          <Route path="/teacher/create-quiz" element={<CreateQuiz />} />
          <Route path="/teacher/add-ques" element={<AddQues />} />
          <Route path="/teacher/view-quiz" element={<ViewQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;