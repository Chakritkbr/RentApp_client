import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddressLink from '../components/AddressLink';
import PlaceGallery from '../components/PlaceGallery';
import BookingDates from '../components/BookingDates';

const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get('/bookings').then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);
  if (!booking) {
    return '';
  }
  //   console.log(booking.place.address);
  return (
    <div className='my-8 mx-8'>
      <h1 className='text-3xl'>{booking.place.title}</h1>

      <AddressLink className='my-2 block' place={booking.place}></AddressLink>
      <div className='bg-gray-200 h-36 p-6 mb-6 rounded-2xl flex items-center justify-between'>
        <div className=''>
          <h2 className='text-2xl mb-4'>Your booking Information</h2>
          <BookingDates booking={booking} />
        </div>
        <div className='bg-primary text-white p-6 rounded-2xl'>
          <div className=''>Total Price</div>
          <div className='text-3xl'>${booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
    </div>
  );
};

export default BookingPage;
