import React from 'react';
import { Subscribe } from 'unstated';

import CartContainer from './CartContainer';

import Cats from '../Config/Items';

export default class Items extends React.Component {
  render() {
    return (
      <ul>
        {Cats.map(cat => (
            <li key={cat.id}>
                <h5>{cat.name}</h5>
                <p>{cat.description}</p>
                <img src={cat.img} alt="cat pic" />
                <p>${cat.price}</p>

                <Subscribe to={[CartContainer]}>
                    {cartContainer => (
                        <button onClick={() => cartContainer.addItem(cat)}>
                            Add Cat to Cart
                        </button>
                    )}
                </Subscribe>
            </li>
        ))
        }
      </ul>
    );
  }
}