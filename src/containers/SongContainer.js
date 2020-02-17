import React from 'react';
import SongList from '../components/SongList';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        songs: [],
        selectedSong: {}

    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({songs: data.feed.entry}))
    .catch(err => console.error);
  }

  render(){
    return(
      <div>
        <h1>UK Top 20</h1>
        <SongList songs={this.state.songs} />
      </div>
    )
  }
}

export default SongContainer;
