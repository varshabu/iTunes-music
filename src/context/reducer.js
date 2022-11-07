export const musicReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_MUSIC_LIST':
      return action.payload;
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        musicList: state.musicList.map((item) =>
          item.id === action.payload ? { ...item, isFavorite: !item.isFavorite } : item
        ),
      };
    case 'FILTER_BY_SEARCH':
      return { ...state, search: action.payload };
    case 'FILTER_BY_CATEGORY':
      return { ...state, category: action.payload };
    case 'FILTER_BY_RELEASE_DATE':
      return { ...state, releaseDate: action.payload };
    case 'CLEAR_FILTER':
      return { ...state, category: '', releaseDate: '', search: '' };
    default:
      return state;
  }
};
