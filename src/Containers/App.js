import React, { Component } from 'react';
import clasess from './App.module.css'
import SearchBar from '../Components/SearchBar';
import youtube from '../Api/Youtube'
import VideoDeatils from '../Components/VideoDeatils';
import VideosList from '../Components/VideoList';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

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
    console.log(this.state.selectedVideo, "chenna kesava")
  }
  render() {
    return (
      <div className={clasess.container}>
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 mt-4">
              <VideoDeatils video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4 mt-4">
              <VideosList videos={this.state.videos} handleselect={this.handleselect} />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card card-body mb-5">
            <div id="map">
              <Map
                google={this.props.google}
                zoom={16}
                initialCenter={{
                  lat:17.4399,
                  lng: 78.4983
                }}
              >
                <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
              </Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCgZ4MSAN1Qa88ma5OWu4urlk0x4N7k-wE")
})(App)
