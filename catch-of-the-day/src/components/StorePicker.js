import React from "react";

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name"></input>
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

// making it available to be used in other files
export default StorePicker;