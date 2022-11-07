import _ from 'lodash';

export const getFormattedList = (list) => {
  return list.map((item) => {
    return {
      id: item.id.attributes['im:id'],
      title: item['im:name'].label,
      image: item['im:image'][0].label,
      artist: item['im:artist'].label,
      releaseDate: item['im:releaseDate'].label,
      category: item.category.attributes.label,
      isFavorite: false,
    };
  });
};

export const getCategories = (list) => {
  const categories = _.groupBy(list, 'category.attributes.label');
  return Object.keys(categories);
};
