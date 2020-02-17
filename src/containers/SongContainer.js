import React, { Component } from 'react';
import SongList from '../components/SongList.js';
import SongItem from '../components/SongItem.js';

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSongTitle: ""
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({songs: data}))
    .catch(err => console.error);
  }

  render(){

    return (
      <div>
        <h2>Songs</h2>
      </div>
    )
  }

}
export default SongContainer;
