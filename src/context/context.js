import { createContext, useContext, useEffect, useReducer } from 'react';
import { musicReducer } from './reducer';
import { getCategories, getFormattedList } from './../utils/music';

export const Music = createContext();

const URL = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

const initialMusicState = {
  musicList: [],
  categories: [],
  category: '',
  releaseDate: '',
  search: '',
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(musicReducer, initialMusicState);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'INITIALIZE_MUSIC_LIST',
          payload: {
            ...initialMusicState,
            musicList: getFormattedList(data.feed.entry),
            categories: getCategories(data.feed.entry),
          },
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return <Music.Provider value={{ state, dispatch }}>{children}</Music.Provider>;
};

export default Context;

export const MusicState = () => {
  return useContext(Music);
};
