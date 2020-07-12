import React from "react";

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
        <h3>{name}</h3>
      </li>
    );
  }
}

export default Fish;
