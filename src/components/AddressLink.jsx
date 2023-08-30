import React from 'react';
import { AddressIcon } from './SvgComponents';

const AddressLink = ({ place, className } = null) => {
  if (!className) {
    className = 'my-3 block';
  }
  className += ' flex gap-1 font-semibold underline';
  return (
    <a
      className={className}
      target='_blank'
      href={'https://maps.google.com/?q=' + place.address}
    >
      <AddressIcon />
      {place.address}
    </a>
  );
};

export default AddressLink;
