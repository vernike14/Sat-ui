import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegStudent from './RegStudent';
import ResultTable from './ResultTable';
import UpdateScore from './UpdateScore';
import DeleteStudent from './DeleteStudent';
import GetRank from './GetRank';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/insert">Register Student</Link>
            </li>
            <li>
              <Link to="/view">All Students Data</Link>
            </li>
            <li>
              <Link to="/rank">Student Rank</Link>
            </li>
            <li>
              <Link to="/update">Update Score</Link>
            </li>
            <li>
              <Link to="/delete">Delete Student</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
        <Route path="/insert" element={<RegStudent />} />
        <Route path="/view" element={<ResultTable />} />
        <Route path="/rank" element={<GetRank />} />
        <Route path="/update" element={<UpdateScore />} />
        <Route path="/delete" element={<DeleteStudent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 
