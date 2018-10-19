import { Container } from 'unstated';

import Cats from '../Config/Items';

export default class CartContainer extends Container {
  state = {
    items: Cats,
    cartItems: []
  };

  addItem = item => {
    console.log('add item', item);
    this.setState({
      cartItems: [...this.state.cartItems, item]
    });
  };

  removeItem = id => {
    this.setState({
      cartItems: this.state.cartItems.filter(item => item.id !== id)
    });
  };

  updateValue = (value, id) => {
    console.log(value);
    const cat = this.state.items.find(item => item.id === id);
    cat.cartQuantity = value;
    console.log(cat);
  };
}