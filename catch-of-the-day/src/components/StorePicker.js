import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // defining ref so we can use it later
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. stop the form from submitting
    event.preventDefault();

    // 2. get the text from the input
    // const storeName = $(input);
    const storeName = this.myInput.current.value;

    // 3. change the page to /store/whatever-the-store-name-is
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      //on submit, we will go to store ^
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>

        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

// making it available to be used in other files
export default StorePicker;
