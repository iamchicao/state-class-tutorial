import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  state = {
    cart: [],
    total: 0,
  };

  add = () => {
    this.setState({
      cart: ["ice cream"],
      total: 5,
    });
  };

  remove = () => {
    this.setState({
      cart: [],
    });
  };

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions);
  };

  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart: {this.state.cart.length} total items.</div>
        <div>Total: {this.getTotal()}</div>
        <div className="product">
          <span rule="image" aria-label="ice cream">
            🍦
          </span>
        </div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  }
}
