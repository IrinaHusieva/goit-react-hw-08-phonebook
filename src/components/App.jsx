
import RegistrForm from './Forms/RegistrForm';
import LoginForm from './Forms/LoginForm';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import Navigation from './Navigation';
import PrivateRoute from 'Routes/PrivateRoute';

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/register" element={<RegistrForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};
