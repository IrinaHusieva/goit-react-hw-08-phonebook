import React from 'react';

const UserMenu = ({ userEmail, handleLogout }) => {
  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;