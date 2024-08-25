import React from 'react';

const Pet = ({ pet, onAdoptPet }) => {
  const { id, name, type, age, weight, gender, isAdopted } = pet;
  const genderIcon = gender === 'male' ? '♂' : '♀';

  return (
    <div data-testid="pet">
      <h2>{name}</h2>
      <h3>{type}</h3>
      <p>Age: {age}</p>
      <p>Weight: {weight}</p>
      <p>{genderIcon}</p>
      {isAdopted ? (
        <button disabled>Already adopted</button>
      ) : (
        <button onClick={() => onAdoptPet(id)}>Adopt pet</button>
      )}
    </div>
  );
};

export default Pet;
