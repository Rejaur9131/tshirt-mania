import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from './../Aunty/Aunty';

export const RingContext = createContext('ring');

const Granpa = () => {
  const [house, setHouse] = useState(1);
  // const ornament = 'Kada Mati Ring';

  const handlebuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h3>Grandpa</h3>

        <p>
          House: {house} <button onClick={handlebuyAHouse}>Buy A House</button>
        </p>
        <section style={{ display: 'flex' }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Granpa;
