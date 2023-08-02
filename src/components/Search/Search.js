// SearchBar.js
import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term); // Call the onSubmit function from the parent component (App.js)
  };

  render() {
    return (
      <div className="bg-white mx-auto mt-5 mb-5  rounded-lg shadow-md w-2/4">
        <form onSubmit={this.onFormSubmit} className="">
          <div className="flex mb-5 gap-x-5 p-5">
            <input
              className="border border-gray-200 p-3 block w-full rounded-md mb-5 transition-all focus:border-blue-400"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
