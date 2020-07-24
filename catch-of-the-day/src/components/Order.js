import React from "react";
import { formatPrice } from "../helpers";
class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const isAvailable = fish && fish.status === "available";

    if (!fish) return null;

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }

    const count = parseFloat(this.props.order[key].count);
    const size = this.props.order[key].size;

    console.log("numbers", count, fish.price);

    return (
      <li key={key}>
        <div className="cart-name">
          <p className="order-fishname">{fish.name}</p>
          <p className="order-fishprice">{formatPrice(count * fish.price)}</p>
        </div>
        <div className="selected-size">
          Size: <span>{size}</span>
        </div>
        <div className="value-discard">
          <div className="add-item">Add/subtract item</div>
          <button
            className="close-button"
            onClick={() => this.props.removeFromOrder(key)}
          >
            <img src="/images/close-button.svg" />
          </button>
        </div>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key].count;
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2 className="order-title">Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          SUBTOTAL
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
export default Order;
