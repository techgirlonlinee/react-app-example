import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

// created a place to hold our data as objects
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  //method
  addFish = (fish) => {
    // console.log("Adding a fish!");
    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes};
    // 2. add our new fish to that fish variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fish object into the state
    this.setState({fishes: fishes})
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
