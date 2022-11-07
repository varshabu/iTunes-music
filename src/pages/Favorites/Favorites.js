import React from 'react';
import { MusicState } from '../../context/context';
import MusicCard from '../../components/MusicCard/MusicCard';
import './Favorites.scss';

const Favorites = () => {
  const {
    state: { musicList },
  } = MusicState();

  return (
    <div className='favorites-container'>
      {musicList
        .filter((item) => item.isFavorite)
        .map((item) => {
          return <MusicCard key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Favorites;
