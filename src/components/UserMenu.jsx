import React from 'react';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await axios.post(
        'https://connections-api.herokuapp.com/users/logout',
        {},
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        }
      );

      axios.defaults.headers.common.Authorization = '';
      localStorage.removeItem('authToken'); 

      dispatch(logOut());
      console.log('Logout successful');
      navigate('/login'); 
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <p>{user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
