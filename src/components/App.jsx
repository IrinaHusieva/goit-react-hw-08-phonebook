
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import Navigation from './Navigation';
import PrivateRoute from '../Routes/PrivateRoute.js';
import RegistrForm from './Forms/RegistrForm';
import LoginForm from './Forms/LoginForm';

export const App = () => {
  return (
    <>
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
    </>
  );
};

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Contacts } from 'pages/Contacts';
// import Navigation from './Navigation';
// import  RegistrForm  from '../components/Forms/RegistrForm';
// import  LoginForm  from '../components/Forms/LoginForm';
// import {PrivateRoute}  from '../Routes/PrivateRoute';
// import  RestrictedRoute  from '../Routes/RestrictedRoute'

// export const App = () => {
//   return (
//     <Router>
//       <Navigation />
//       <Routes>
//         <Route path="/register" element={<RegistrForm />} />
//         <Route path="/login" element={<LoginForm />} />
//         <Route
//           path="/contacts"
//           element={<PrivateRoute component={<Contacts />} redirectTo="/login" />}
//         />
//         <Route
//           path="/restricted" 
//           element={<RestrictedRoute component={<Contacts />} redirectTo="/login" />}
//         />
//       </Routes>
//     </Router>
//   );
// };
