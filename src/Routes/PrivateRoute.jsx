// import { Contacts } from 'pages/Contacts';
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const checkIfUserIsAuthenticated = () => {
//   const authToken = localStorage.getItem('authToken');
//   return authToken !== null;
// };


// const PrivateRoute = ({ component: Component, ...rest }) => {
    
//   const isAuthenticated = checkIfUserIsAuthenticated();

//   return (
//      <Route
//       {...rest}
//       element={isAuthenticated ? <Contacts /> : <Navigate to="/login" />}
//     />
//   );
// };

// export default PrivateRoute;

import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const isAuth = true
	return isAuth ? children : <Navigate to='/login' />
}

export default PrivateRoute
