import React from 'react';
import { Subscribe } from 'unstated';

import CartContainer from '../Containers/CartContainer';

export default class Cart extends React.Component {
  render() {
    return (
      <div className="Cart">
        <Subscribe to={[CartContainer]}>
          {cartContainer =>
            cartContainer.state.cartItems.map(item => (
              <div className="Cart-item" key={item.id}>
                <img src={item.img} alt="cat pic" />
                <p className="Cart-item-description">{item.description} </p>
                <p className="Cart-item-price">{item.price} </p>
                <button onClick={() => cartContainer.removeItem(item.id)}>
                Remove Item From Cart
                </button>
              </div>
            ))
          }
        </Subscribe>
      </div>
    );
  }
}