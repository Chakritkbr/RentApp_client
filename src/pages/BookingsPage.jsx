import React, { useEffect, useState } from 'react';
import AccountNav from '../components/AccountNav';
import axios from 'axios';
import PlaceImg from '../components/PlaceImg';
import { Link } from 'react-router-dom';
import BookingDates from '../components/BookingDates';
import { MoneyIcon } from '../components/SvgComponents';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get('/bookings').then((response) => {
      setBookings(response.data);
    });
  }, []);
  return (
    <div>
      <AccountNav />

      <div className='mx-8'>
        {bookings?.length > 0 &&
          bookings.map((booking, index) => (
            <Link
              key={index}
              to={`/account/bookings/${booking._id}`}
              className='flex gap-4 mb-2 bg-gray-200 rounded-2xl overflow-hidden'
            >
              <div className='w-48'>
                <PlaceImg place={booking.place} />
              </div>
              <div className='py-3 pr-3 grow'>
                <h2 className='text-xl'>{booking.place.title}</h2>

                <div className='text-xl'>
                  <BookingDates
                    booking={booking}
                    className='mb-2 mt-4 text-sm text-gray-500'
                  />
                  <div className='flex gap-1 '>
                    <MoneyIcon />
                    <span className='text-2sl'>
                      Total price ${booking.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BookingsPage;
