import React from 'react';

const Filters = ({ onChangeType, onFindPetsClick }) => {
  return (
    <div>
      <label htmlFor="type">Type</label>
      <select id="type" onChange={(e) => onChangeType(e.target.value)}>
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
      <button onClick={onFindPetsClick}>Find pets</button>
    </div>
  );
};

export default Filters;
