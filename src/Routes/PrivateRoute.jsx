import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const isAuth = true
	return isAuth ? children : <Navigate to='/login' />
}

export default PrivateRoute
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

// const PrivateRoute = ({ element }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   if (isLoggedIn) {
//     return <Route element={element} />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export default PrivateRoute;
