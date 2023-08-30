import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MyAccomIcon, MyBookingIcon, MyProfileIcon } from './SvgComponents';

const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split('/')?.[2];
  if (subpage === '') {
    subpage = 'profile';
  }
  function linkClasses(type = null) {
    // make which link is choosen and between 3

    let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
    if (type === subpage) {
      classes += ' bg-primary text-white ';
    } else {
      classes += ' bg-gray-200 ';
    }

    return classes;
  }
  return (
    <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
      <Link className={linkClasses('profile')} to={'/account/'}>
        <MyProfileIcon />
        My Profile
      </Link>
      <Link className={linkClasses('bookings')} to={'/account/bookings'}>
        <MyBookingIcon />
        My Bookings
      </Link>
      <Link className={linkClasses('places')} to={'/account/places'}>
        <MyAccomIcon />
        My Accommodations
      </Link>
    </nav>
  );
};

export default AccountNav;
