import React from 'react';
import { FormControl } from 'react-bootstrap';
import { MusicState } from '../../context/context';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const { dispatch } = MusicState();

  return (
    <nav className='nav-bar'>
      <Link to='/'>
        <h1 className='title'>My Music App</h1>
      </Link>
      <FormControl
        style={{ width: 300 }}
        type='search'
        placeholder='Search a music'
        className='m-auto'
        onChange={(e) => {
          dispatch({
            type: 'FILTER_BY_SEARCH',
            payload: e.target.value,
          });
        }}
      />
      <Link to='/favorites'>Go to my favorites</Link>
    </nav>
  );
};

export default Header;
