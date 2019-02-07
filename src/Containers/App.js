import React, { Component } from 'react';
import clasess from './App.module.css'
import SearchBar from '../Components/SearchBar';
import youtube from '../Api/Youtube'
import VideoDeatils from '../Components/VideoDeatils';
import VideosList from '../Components/VideoList';

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
  handleselect = (video) => {
    this.setState({ selectedVideo: video })
    console.log(this.state.selectedVideo,"chenna kesava")
  }
  render() {
    return (
      <div className={clasess.container}>
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 mt-4">
              <VideoDeatils video={this.state.selectedVideo}/>
            </div>
            <div className="col-md-4 mt-4">
              <VideosList videos={this.state.videos} handleselect={this.handleselect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
