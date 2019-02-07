import React, { Component } from 'react';
import clasess from './App.module.css'
import SearchBar from '../Components/SearchBar';
import youtube from '../Api/Youtube'

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  handleSubmit = async (tearmForSearch) => {
    const response = await youtube.get('/search', {
      params: {
        q: tearmForSearch
      }
    })
    this.setState({ videos: response.data.items })
  }
  render() {
    console.log(this.state.videos)
    return (
      <div className={clasess.container}>
        <SearchBar handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
