import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountNav from '../components/AccountNav';
import axios from 'axios';
import PlaceImg from '../components/PlaceImg';
import { AddNewIcon } from '../components/SvgComponents';

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/user-places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className='text-center'>
        <Link
          className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full'
          to={'/account/places/new'}
        >
          <AddNewIcon />
          Add new place
        </Link>
      </div>
      <div className='mt-4'>
        {places.length > 0 &&
          places.map((place, index) => (
            <Link
              key={index}
              to={'/account/places/' + place._id}
              className='flex cursor-pointer gap-4 bg-gray-100 p-2 rounded-2xl'
            >
              <div className='flex w-32 h-32 bg-gray-300 grow shrink-0'>
                <PlaceImg place={place} />
              </div>
              <div className='grow-0 shrink'>
                <h2 className='text-xl'>{place.title}</h2>
                <p className='text-sm mt-2'>{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacesPage;
