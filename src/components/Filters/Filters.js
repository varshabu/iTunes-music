import React from 'react';
import { MusicState } from '../../context/context';
import { Form } from 'react-bootstrap';
import './Filters.scss';

const Filters = () => {
  const {
    state: { categories },
    dispatch,
  } = MusicState();

  return (
    <div className='filters'>
      <Form.Select
        style={{ padding: 10 }}
        onChange={(e) => {
          dispatch({
            type: 'FILTER_BY_CATEGORY',
            payload: e.target.value,
          });
        }}
      >
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </Form.Select>
      <input
        type='date'
        onChange={(e) => {
          dispatch({
            type: 'FILTER_BY_RELEASE_DATE',
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default Filters;
