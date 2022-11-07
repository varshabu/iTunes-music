import React from 'react';
import { MusicState } from '../../context/context';
import Filters from '../../components/Filters/Filters';
import MusicCard from '../../components/MusicCard/MusicCard';
import './Home.scss';

const Home = () => {
  const {
    state: { musicList, search, category, releaseDate },
  } = MusicState();

  const formattedData = () => {
    let updatedList = musicList;
    if (search) {
      updatedList = updatedList.filter(
        (item) => item.title.toLowerCase().search(search.toLowerCase().trim()) !== -1
      );
    }

    if (category) {
      updatedList = updatedList.filter((item) => item.category === category);
    }

    if (releaseDate) {
      updatedList = updatedList.filter(
        (item) => new Date(item.releaseDate).toDateString() === new Date(releaseDate).toDateString()
      );
    }

    return updatedList;
  };

  return (
    <div className='home'>
      <Filters />
      <div className='products-container'>
        {formattedData().length ? (
          formattedData().map((item) => {
            return <MusicCard key={item.id} item={item} />;
          })
        ) : (
          <h2>Nothing found</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
