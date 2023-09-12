// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsRefreshing, selectIsLoggedIn } from '../redux/auth/selectors';

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const isAuth = true
	return isAuth ? children : <Navigate to='/login' />
}

export default PrivateRoute