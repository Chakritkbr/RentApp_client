import React from 'react';

const PlaceImg = ({ place, index = [0], className = null }) => {
  if (!place.photos?.length) {
    console.log(place.photos?.length);
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return (
    <img
      className={className}
      src={
        `${import.meta.env.VITE_REACT_APP_API}/uploads/` + place.photos[index]
      }
      alt=''
    />
  );
};

export default PlaceImg;
