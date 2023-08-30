import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { ExtendIcon, MainLogo, ProfileIcon, SearchIcon } from './SvgComponents';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <header className='flex justify-between'>
        <Link to={'/'} href='' className='flex items-center gap-1'>
          <MainLogo />
          <span className='font-bold text-xl'>Rent</span>
        </Link>
        <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
          <div>Anywhere</div>
          <div className='border-l border-gray-300'></div>
          <div>Any week</div>
          <div className='border-l border-gray-300'></div>
          <div>Add guests</div>
          <button className='bg-primary text-white p-1 rounded-full'>
            <SearchIcon />
          </button>
        </div>
        <Link
          to={user ? '/account' : '/login'}
          className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'
        >
          <ExtendIcon />
          <div className='bg-gray-500 items-center text-white rounded-full border border-gray-500 overflow-hidden'>
            <ProfileIcon />
          </div>
          {!!user && <div>{user.name}</div>}
        </Link>
      </header>
    </div>
  );
};

export default Header;
