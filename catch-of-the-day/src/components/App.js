import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

// STORAGE - created a place to hold our data as objects
// inside of the fish for example, it will store all the fish data that has been passed through from AddFishForm.js
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
    layout: "default",
  };

  // lIFE CYLCLE OF COMPONENT
  // setting up the firebase packpage to sync the database url to our state
  componentDidMount() {
    const { params } = this.props.match;

    //first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  switchLayout = (layout) => {
    if (layout === this.state.layout) {
      this.setState({ layout: "default" });
    } else {
      this.setState({ layout: layout });
    }
  };

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  // when you leave the site
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  //method to *update the states* above. eg. method to update and store a single fish into a state above
  // to get the data to be stored in the STATE
  addFish = (fish) => {
    // console.log("Adding a fish!");

    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. take that copy and add our new fish to that fish variable (with its own unique ID)
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fish object into the state; setState is a function to update the state
    this.setState({ fishes: fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  updateFish = (key, updateFish) => {
    // 1. take a copy of the current state
    const fishes = { ...this.state.fishes };

    // 2. update the state

    fishes[key] = updateFish;

    // 3. set the updated fish into the state
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    // 1. tak ea copy of state
    const fishes = { ...this.state.fishes };

    // 2. update the state
    fishes[key] = null;

    //3. update the state
    this.setState({ fishes });
  };

  addToOrder = (key, size) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. either add to the order, or update the number in our order
    console.log("ORDER KEY", order[key]);
    order[key] = order[key]
      ? { count: order[key].count + 1, size: size }
      : { count: 1, size: size };
    // 3. call setState to update our state object with the order
    this.setState({ order });
  };

  removeFromOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove that item from the order
    delete order[key];

    // 3. call setState to update our state object with the order
    this.setState({ order });
  };

  render() {
    return (
      <div className={"catch-of-the-day container " + this.state.layout}>
        <div className="menu">
          {/* <Header tagline="Fresh Seafood Market" /> */}
          <div className="overlay"></div>
          <header className="heading">
            <a className="logo">GoodHood</a>
            <div className="more">
              <h2 className="description">
                Graphic design hoodies produced by local artists and designers
                gathered into one platform
              </h2>
              <a className="filters">
                <p>PRICE (LOW)</p>
                <img src="../../sorting-arrow.svg" />
              </a>
            </div>
          </header>
          <ul className="fishes">
            {/* Get the fishes object (state we defined on top), loop over it using MAP and find the key for each one*/}
            {Object.keys(this.state.fishes).map((key) => (
              //send that data to the fish component
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        {/* Passing all the fish in the state and the orders within the state */}

        <div className="drawer">
          <button
            onClick={() => this.switchLayout("cart")}
            className="tab cart"
          >
            <span className="drawer-title title-cart">
              <span>Cart</span>
              <span className="items-amount">
                <span className="num">0</span>
              </span>
            </span>
          </button>
          <button
            onClick={() => this.switchLayout("vendor")}
            className="tab vendor"
          >
            <span className="drawer-title title-vendor">Vendor</span>
          </button>
          <div className="cart-drawer sub-drawer">
            <Order
              fishes={this.state.fishes}
              order={this.state.order}
              removeFromOrder={this.removeFromOrder}
            />
          </div>
          <div className="vendor-drawer sub-drawer">
            <Inventory
              addFish={this.addFish}
              updateFish={this.updateFish}
              deleteFish={this.deleteFish}
              loadSampleFishes={this.loadSampleFishes}
              fish={this.state.fishes}
              storeId={this.props.match.params.storeId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
