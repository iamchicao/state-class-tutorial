import React, { Component } from "react";
import "./Product.css";

const products = [
  {
    emoji: "🍦",
    name: "Ice Cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "Donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "Watermelon",
    price: 4,
  },
];
export default class Product extends Component {
  state = {
    cart: [],
  };

  add = (product) => {
    this.setState((state) => ({
      cart: [...state.cart, product],
    }));
  };

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  getTotal = () => {
    const total = this.state.cart.reduce(
      (totalCost, item) => totalCost + item.price,
      0
    );
    return total.toLocaleString(undefined, this.currencyOptions);
  };

  remove = (product) => {
    this.setState((state) => {
      const cart = [...state.cart];
      const producIndex = cart.findIndex((p) => p.name === product.name);
      if (producIndex < 0) {
        return;
      }
      cart.splice(producIndex, 1);
      return {
        cart,
      };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart: {this.state.cart.length} total items.</div>
        <div>Total: {this.getTotal()}</div>

        <div>
          {products.map((product) => (
            <div key={product.name}>
              <div className="product">
                <span rule="image" aria-label={product.name}>
                  {product.emoji}
                </span>
              </div>
              <button onClick={() => this.add(product)}>Add</button>
              <button onClick={() => this.remove(product)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
