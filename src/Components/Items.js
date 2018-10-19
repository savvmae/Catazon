import React from 'react';
import { Subscribe } from 'unstated';
import NumericInput from 'react-numeric-input';

import CartContainer from '../Containers/CartContainer';

export default class Items extends React.Component {
  constructor(props) {
      super(props);

      this.onChange = this.onChange.bind(this);
  }

  onChange(a, b, c) {
    console.log(a, b, c);
  }

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
                                <div className="input-group">
                                    <p>Quantity</p>
                                    <NumericInput
                                        min={0}
                                        max={100}
                                        mobile={true}
                                        value={0}
                                        strict={true}
                                        style={{
                                            input: {
                                                color: 'purple'
                                            }
                                        }}
                                        onChange={(value) => {cartContainer.updateValue(value, cat.id)}}
                                    />
                                </div>
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