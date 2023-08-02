// App.js
import "./App.scss";
import axios from "axios";
import React from "react";
import SearchBar from "./components/Search/Search";
import SongDetail from "./components/lab5/songs/component/SongDetail";
import SongList from "./components/lab5/songs/component/SongList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [], // Initialize images as an empty array
    };
  }

  onSearchSubmit = async (term) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: term },
          headers: {
            Authorization:
              "Client-ID dBpXovVafx_tZ-cN-SFPF_ji8UBkqGu-x9MHO_x1-y8",
          },
        }
      );

      this.setState({ images: response.data.results }); // Update the state with fetched images
      console.log(this.state.images);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <div className="image-list">
          {this.state.images.map((image) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.description}
            />
          ))}
        </div>
      </div>
    
      
    );
  }
}

export default App;
