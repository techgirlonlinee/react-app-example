import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  state = {
    size: "M",
  };
  //   on click, run the return of updating the cart to add the product in the cart
  handleClick = () => {
    // the index holds the key (unique fish name)
    this.props.addToOrder(this.props.index, this.state.size);
  };

  handleSize = (size) => {
    this.setState({ size });
  };

  render() {
    //   making properties automatically according to info stored in details
    const {
      image,
      name,
      price,
      creator,
      desc,
      status,
      small_qty,
      med_qty,
      large_qty,
    } = this.props.details;
    const isAvailable = status === "available";

    console.log(isAvailable);

    return (
      <div className="menu-fish">
        <img className="product-pic" src={image} alt={name} />
        <h3 className="fish-name">{name}</h3>
        <p className="fish-desc">{desc}</p>
        <p className="creator-name">{creator}</p>
        <div className="number-details">
          <span className="price">{formatPrice(price)}</span>

          <div className="sizes">
            {small_qty ? (
              <div className="field_group">
                <label
                  className={
                    this.state.size === "S"
                      ? "active small_label"
                      : "small_label"
                  }
                  htmlFor={this.props.index + "_small"}
                >
                  <span>S</span>
                </label>
                <input
                  type="radio"
                  id={this.props.index + "_small"}
                  name={this.props.index + "_sizes"}
                  value="S"
                  onChange={() => this.handleSize("S")}
                />
              </div>
            ) : null}

            {med_qty ? (
              <div className="field_group">
                <label
                  className={
                    this.state.size === "M"
                      ? "active medium_label"
                      : "medium_label"
                  }
                  htmlFor={this.props.index + "_medium"}
                >
                  <span>M</span>
                </label>

                <input
                  type="radio"
                  id={this.props.index + "_medium"}
                  name={this.props.index + "_sizes"}
                  value="M"
                  onChange={() => this.handleSize("M")}
                />
              </div>
            ) : null}

            {large_qty ? (
              <div className="field_group">
                <label
                  className={
                    this.state.size === "L"
                      ? "active large_label"
                      : "large_label"
                  }
                  htmlFor={this.props.index + "_large"}
                >
                  <span>L</span>
                </label>
                <input
                  type="radio"
                  id={this.props.index + "_large"}
                  name={this.props.index + "_sizes"}
                  value="L"
                  onChange={() => this.handleSize("L")}
                />
              </div>
            ) : null}
          </div>
        </div>
        <button
          className="addTo"
          disabled={!isAvailable}
          onClick={this.handleClick}
        >
          {isAvailable ? "Add To Cart" : "Sold Out!"}
        </button>
      </div>
    );
  }
}

// making it available to be used in other files
export default Fish;
