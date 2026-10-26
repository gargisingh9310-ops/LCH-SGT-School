import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Placeholder routes redirecting to relevant homepage sections for phase 1 review */}
        <Route path="/about" element={<Navigate to="/#legacy" replace />} />
        <Route path="/facilities" element={<Navigate to="/#facilities" replace />} />
        <Route path="/csr-support" element={<Navigate to="/#csr-banner" replace />} />
        <Route path="/admissions" element={<Navigate to="/#admissions" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
