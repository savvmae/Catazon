import React from 'react';
import { Subscribe } from 'unstated';

import CartContainer from './CartContainer';

export default class Cart extends React.Component {
  render() {
    return (
      <ul>
        <Subscribe to={[CartContainer]}>
          {cartContainer =>
            cartContainer.state.cartItems.map(item => (
              <li key={item.id}>
                  <img src={item.img} alt="cat pic" />
                  <p>{item.description} </p>
                  <p>{item.price} </p>
                    <button onClick={() => cartContainer.removeItem(item.id)}>
                    Remove Item From Cart
                    </button>
              </li>
            ))
          }
        </Subscribe>
      </ul>
    );
  }
}