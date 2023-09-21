import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const NavBar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className='flex p-[1rem] fixed top-0 w-full justify-between items-center bg-white'>
      <Link to='/'>
        <h1 className='gradient__text font-bold text-3xl'>PicsFolio</h1>
      </Link>
      {auth.currentUser ? (
        <div>
          <button
            onClick={handleLogout}
            className='gradient__bg w-[6rem] text-white rounded-md p-2'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white bg-black p-2 rounded-md w-[8rem] mr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-[#3d85d4] px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
