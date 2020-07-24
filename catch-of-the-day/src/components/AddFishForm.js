import React from "react";
import { formatPrice } from "../helpers";

// *First, we create a React component for the whole form.
// 1) We need to create ref and define them so we can refer to them later on and
// for us to collect information that is passed through from the form

// *Second, we need to create a fish card function
// In that function, we prevent the automatic form submission
// 2) Then we use those refs that we defined to create an object so current info passed into the form can be stored in it

// *Third, we return/render the form with all the fields we wnat to collect info from
// 3) Additionally, we add "ref" and refer to "this" as what is being typed in the component as well as
// referring back to the particular refs that has been defined in the first step so we can target what is being type and store it in the 2nd step

class AddFishForm extends React.Component {
  // DEFINE REF SO CAN REFER TO IT THROUGHOUT
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  creatorRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  //   to send the data to state
  createFish = (event) => {
    // 1. Stop the default form from submitting
    event.preventDefault();

    // 2. create a fish object that contains all the information from the form
    // STORING REF INFO (current value of what is submitted in the form)
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      creator: this.creatorRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    // console.log(fish);
    // 3. send to the App component to store in state
    // LAST: ADDING THE FISH AND PUSHING THE DATA OF EACH FISH TO STATE
    this.props.addFish(fish);

    // 4. reset/clear the form
    event.currentTarget.reset();
  };

  //ref pulls the data from an element
  // TARGET REFS TO PULL DATA AND STORE IT IN 2ND STEP
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" placeholder="Name" ref={this.nameRef} />
        <input
          name="price"
          type="text"
          placeholder="Price"
          ref={this.priceRef}
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <input
          name="name"
          type="text"
          placeholder="Designer"
          ref={this.creatorRef}
        />
        <textarea
          name="desc"
          type="text"
          placeholder="Description"
          ref={this.descRef}
        />
        <input
          name="image"
          type="text"
          placeholder="Image"
          ref={this.imageRef}
        />

        <button className="addFish-button" type="submit">
          + Add Fish
        </button>
      </form>
    );
  }
}

// making it available to be used in other files
export default AddFishForm;
