import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  //   on click, run the return of updating the cart to add the product in the cart
  handleClick = () => {
    // the index holds the key (unique fish name)
    this.props.addToOrder(this.props.index);
  };

  render() {
    //   making properties automatically according to info stored in details
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";

    console.log(isAvailable);

    return (
      <div className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </div>
    );
  }
}

// making it available to be used in other files
export default Fish;
