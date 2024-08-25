import React, { useState } from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

const App = () => {
  const [filters, setFilters] = useState({ type: 'all' });
  const [pets, setPets] = useState([]);

  const handleChangeType = (type) => {
    setFilters({ type });
  };

  const handleFindPetsClick = () => {
    let url = 'http://localhost:3001/pets';
    if (filters.type !== 'all') {
      url += `?type=${filters.type}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => setPets(data));
  };

  const handleAdoptPet = (id) => {
    setPets(pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    ));
  };

  return (
    <div>
      <Filters 
        onChangeType={handleChangeType}
        onFindPetsClick={handleFindPetsClick} 
      />
      <PetBrowser 
        pets={pets} 
        onAdoptPet={handleAdoptPet} 
      />
    </div>
  );
};

export default App;
