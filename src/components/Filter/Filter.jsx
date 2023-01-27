import React from 'react';
import s from './Filter.module.css';

export const Filter = ({ nameFilter, handleChangeFilter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={nameFilter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};
