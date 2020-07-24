import React from "react";

class EditFishForm extends React.Component {
  //if any of the field changes,
  handleChange = (event) => {
    console.log(event);

    // updating the fish
    // 1. take a copy of the current fish
    const updateFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    // 2.

    this.props.updateFish(this.props.index, updateFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          className="name-text"
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          className="creator-name"
          type="text"
          name="creator"
          onChange={this.handleChange}
          value={this.props.fish.creator}
        />
        <input
          className="price-text"
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <div className="sizing">
          <div className="row">
            <div className="labels">
              <span className="active">S</span>
              <span className="m-active">M</span>
              <span>L</span>
            </div>
            <div className="field">
              <label>QTY:</label>
              <input
                type="number"
                name="small_qty"
                className="quantity"
                onChange={this.handleChange}
                value={this.props.fish.small_qty}
              />
            </div>
          </div>

          <div className="row">
            <div className="labels">
              <span className="s-size">S</span>
              <span className="active m-active">M</span>
              <span>L</span>
            </div>
            <div className="field">
              <label>QTY:</label>
              <input
                type="number"
                name="med_qty"
                className="quantity"
                value={this.props.fish.med_qty}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="labels">
              <span>S</span>
              <span>M</span>
              <span className="active l-active">L</span>
            </div>
            <div className="field">
              <label>QTY:</label>
              <input
                type="number"
                name="large_qty"
                className="quantity"
                value={this.props.fish.large_qty}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>

        <input
          className="image-text"
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />

        <button
          className="remove-fish"
          onClick={() => this.props.deleteFish(this.props.index)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default EditFishForm;
