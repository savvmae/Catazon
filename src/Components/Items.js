import React from 'react';
import { Subscribe } from 'unstated';

import CartContainer from '../Containers/CartContainer';

export default class Items extends React.Component {
  render() {
    return (
      <div className="Items">
        <h1>Available Cats</h1>
            <div className="Items--grid">
                <Subscribe to={[CartContainer]}>
                    {cartContainer => 
                        cartContainer.state.items.map(cat => (
                            <div key={cat.id} className="cat-wrapper">
                                <h5>{cat.name}</h5>
                                <p>{cat.description}</p>
                                <img src={cat.img} alt="cat pic" />
                                <p>${cat.price}</p>
                                    
                                <button onClick={() => cartContainer.addItem(cat)}>
                                    Add Cat to Cart
                                </button>
                            </div>
                        ))
                    }
                </Subscribe>
            </div>
      </div>
    );
  }
}