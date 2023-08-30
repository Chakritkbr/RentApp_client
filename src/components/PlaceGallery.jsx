import React, { useEffect, useState } from 'react';
import { CloseGalleryIcon, ShowmorePhotoIcon } from './SvgComponents';

const PlaceGallery = ({ place }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  if (showAllPhotos) {
    return (
      <div className='absolute inset-0 bg-black text-white  min-h-screen'>
        <div className='bg-black p-8 grid gap-4'>
          <div className=''>
            <h2 className='text-3xl mr-48'>Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className='fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black'
            >
              <CloseGalleryIcon />
              Close photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div key={photo}>
                <img
                  src={`${import.meta.env.VITE_REACT_APP_API}/uploads/` + photo}
                  alt=''
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className='relative '>
      <div className=' grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden '>
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                className='aspect-square object-cover cursor-pointer'
                src={
                  `${import.meta.env.VITE_REACT_APP_API}/uploads/` +
                  place.photos?.[0]
                }
              />
            </div>
          )}
        </div>
        <div className='grid'>
          {place.photos?.[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className='aspect-square object-cover cursor-pointer'
              src={
                `${import.meta.env.VITE_REACT_APP_API}/uploads/` +
                place.photos?.[1]
              }
            />
          )}
          <div className='overflow-hidden'>
            {place.photos?.[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className='aspect-square object-cover cursor-pointer relative top-2'
                src={
                  `${import.meta.env.VITE_REACT_APP_API}/uploads/` +
                  place.photos?.[2]
                }
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className='flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500'
      >
        <ShowmorePhotoIcon />
        Show more photos
      </button>
    </div>
  );
};

export default PlaceGallery;
