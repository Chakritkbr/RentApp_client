import React from 'react';
import {
  EntranceIcon,
  ParkingIcon,
  PetsIcon,
  RadioIcon,
  TvIcon,
  WifiIcon,
} from './SvgComponents';

const Perk = ({ selected, onChange }) => {
  function handleCBClick(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }
  return (
    <div className='grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={selected?.includes('wifi')}
          name='wifi'
          onChange={handleCBClick}
        />
        <WifiIcon />

        <span>Wifi</span>
      </label>
      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={selected?.includes('parking')}
          name='parking'
          onChange={handleCBClick}
        />
        <ParkingIcon />

        <span>Free parking spot</span>
      </label>
      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={selected?.includes('tv')}
          name='tv'
          onChange={handleCBClick}
        />
        <TvIcon />

        <span>TV</span>
      </label>
      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={selected?.includes('radio')}
          name='radio'
          onChange={handleCBClick}
        />
        <RadioIcon />

        <span>Radio</span>
      </label>
      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={selected?.includes('pets')}
          name='pets'
          onChange={handleCBClick}
        />
        <PetsIcon />

        <span>Pets</span>
      </label>
      <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={selected?.includes('entrance')}
          name='entrance'
          onChange={handleCBClick}
        />
        <EntranceIcon />
        <span>Private entrance</span>
      </label>
    </div>
  );
};

export default Perk;
