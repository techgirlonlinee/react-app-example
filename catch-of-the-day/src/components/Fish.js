import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    // const image = this.props.details.iamge;
    // const name = this.props.details.name;
    // const status = this.props.details.status;

    // ES6 destructuring
    const { image, name, status, desc, price } = this.props.details;

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add To Cart</button>
      </li>
    );
  }
}

export default Fish;
