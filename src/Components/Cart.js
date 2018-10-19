import React from 'react';
import { Subscribe } from 'unstated';

import CartContainer from '../Containers/CartContainer';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.cartRender = this.cartRender.bind(this);
  }

  cartRender(container) {
    console.log(container);
    if (container.state.cartItems.length === 0) {
      return (
        <div>
          <h2>Your Cart is Empty! Get yourself some cats!</h2>
        </div>
      );
    }
    return (
      container.state.cartItems.map(item => (
        <div className="cat-wrapper cat-wrapper--cart" key={item.id}>
          <img src={item.img} alt="cat pic" />
          <h5>{item.name} </h5>
          <p>{item.cartQuantity} x ${item.price} = ${item.price * item.cartQuantity} </p>
          <button onClick={() => container.removeItem(item.id)}>
          Remove Item From Cart
          </button>
        </div>
      ))
    );
  }
  render() {
    return (
      <div className="Cart">
        <h1>Your Cart</h1>
          <div className="Cart--grid">
            <Subscribe to={[CartContainer]}>
              {cartContainer => this.cartRender(cartContainer)}
            </Subscribe>
          </div>
      </div>
    );
  }
}