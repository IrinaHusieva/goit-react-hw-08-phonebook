
import RegistrForm from './Forms/RegistrForm';
import LoginForm from './Forms/LoginForm';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import Header from './Header';

export const App = () => {
  
  return (
    <Router>
      <Header></Header>
        <Routes>
          <Route path="/register" element={<RegistrForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<Navigate to="/contacts" />} /> 
        </Routes>
    </Router>
  );
};
