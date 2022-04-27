import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
          Shopping Cart: 0 total items.
        </div>
        <div>Total :0</div>
          
        <div className="product"><span role="image" aria-label="ice cream">🍦</span></div>
        <button>Add</button> <button>Remove</button>
      </div>
    );
  }
}
