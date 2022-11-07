import React from 'react';
import { MusicState } from '../../context/context';
import { Button, Card } from 'react-bootstrap';
import './MusicCard.scss';

const MusicCard = ({ item }) => {
  const { dispatch } = MusicState();

  const handleClick = (id) => {
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: id,
    });
  };

  return (
    <div className='music-card'>
      <Card className='h-100'>
        <Card.Img variant='top' src={item.image} alt={item.title}></Card.Img>
        <Card.Body>
          <Card.Subtitle className='card-title'>{item.title}</Card.Subtitle>
          <Card.Text className='description'>Artist: {item.artist}</Card.Text>
          <Card.Text className='description'>
            Released on: {new Date(item.releaseDate).toDateString()}
          </Card.Text>
        </Card.Body>
        <Button variant='primary' onClick={() => handleClick(item.id)}>
          {item.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </Button>
      </Card>
    </div>
  );
};

export default MusicCard;
