import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NotificationsProvider } from './context/NotificationsContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import DronesPage from './pages/drones/DronesPage';
import PilotsPage from './pages/pilots/PilotsPage';
import FlightApplicationsPage from './pages/flights/FlightApplicationsPage';
import CreateFlightPage from './pages/flights/CreateFlightPage';
import MonitoringPage from './pages/monitoring/MonitoringPage';
import ProfilePage from './pages/profile/ProfilePage';
import NoFlyZonesPage from './pages/zones/NoFlyZonesPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationsProvider>
          <Router>
            <Routes>
              {/* Публичные маршруты */}
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>
              
              {/* Защищенные маршруты */}
              <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/drones" element={<DronesPage />} />
                <Route path="/pilots" element={<PilotsPage />} />
                <Route path="/flights" element={<FlightApplicationsPage />} />
                <Route path="/flights/create" element={<CreateFlightPage />} />
                <Route path="/monitoring" element={<MonitoringPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/no-fly-zones" element={<NoFlyZonesPage />} />
              </Route>
              
              {/* Перенаправление для корневого пути */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Router>
        </NotificationsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;