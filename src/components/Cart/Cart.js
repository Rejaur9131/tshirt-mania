import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
  // Conditional Rendering Options
  // 1. Element Varible
  // 2. Ternary Operator
  // 3. && operator
  // 4. || operator

  let command;

  if (cart.length === 0) {
    command = <p>Please add atleast one item!!!</p>;
  } else if (cart.length === 1) {
    command = <p>Please add more...</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding items</small>
      </p>
    );
  }

  return (
    <div className="cart-info">
      <h2>Items Selected: {cart.length}</h2>

      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {cart.length === 0 || <p className="orange">YAY!! You are buying</p>}

      {cart.length === 3 && (
        <div className="orange">
          <h3>Trigonal</h3>
          <p>Tin jon ke ki gift diba</p>
        </div>
      )}

      {command}

      {cart.length !== 4 ? <p>Keep adding</p> : <button>Remova All</button>}
      {cart.length === 4 && <button className="orange">Review Order</button>}
    </div>
  );
};

export default Cart;
