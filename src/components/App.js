import React, { Component } from 'react'

import youtube from '../api/youtube'

import Spinner from './ui/Spinner'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends Component {
  state = {
    loading: false,
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onSearch('Nasa Moon')
  }

  onSearch = async term => {
    this.setState({ loading: true })
    const response = await youtube.get('/search', {
      params: { q: term }
    })
    this.setState({
      videos: response.data.items,
      loading: false,
      selectedVideo: response.data.items[0]
    })
  }

  handleSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    const { videos, loading, selectedVideo } = this.state
    return (
      <div>
        <SearchBar onSubmit={this.onSearch} />
        <div className="container">
          <div className="playerSide">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="listSide">
            {loading && <Spinner />}
            <VideoList videos={videos} onSelect={this.handleSelect} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
