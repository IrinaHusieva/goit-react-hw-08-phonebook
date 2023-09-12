import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import styled from '../components/Forms/ContactForm.module.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div>
      <p>{user.name}</p>
      <button type="button" onClick={handleLogout} className={styled.btn}>
        Logout
      </button>
    </div>
  );
};
