import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';

// Pages
const LoginPage = () => <div className="p-8"><h1>Login</h1></div>;
const DashboardPage = () => <div className="p-8"><h1>Dashboard</h1></div>;
const ReportsPage = () => <div className="p-8"><h1>Reports</h1></div>;
const UsersPage = () => <div className="p-8"><h1>Users</h1></div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
