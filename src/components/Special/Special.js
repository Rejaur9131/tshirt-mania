import React, { useContext } from 'react';
import { RingContext } from './../Grandpa/Grandpa';

const Special = () => {
  //   const [ornament, house] = useContext(RingContext);
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h5>Special</h5>
      <p>
        <small>Gift: {house}</small>
      </p>
      <button onClick={() => setHouse(house + 1)}>Buy A House</button>
    </div>
  );
};

export default Special;
