import React from 'react';
import { differenceInCalendarDays, format } from 'date-fns';
import { CalenderIcon, NightsIcon } from './SvgComponents';

const BookingDates = ({ booking, className }) => {
  return (
    <div className={'flex gap-1 ' + className}>
      {' '}
      <NightsIcon />
      {differenceInCalendarDays(
        new Date(booking.checkOut),
        new Date(booking.checkIn)
      )}{' '}
      nights :
      <div className='flex gap-1 items-center ml-2'>
        <CalenderIcon />
        {format(new Date(booking.checkIn), 'yyyy-MM-dd')}
      </div>
      &rarr;
      <div className='flex gap-1 items-center'>
        <CalenderIcon />
        {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
      </div>
    </div>
  );
};

export default BookingDates;
