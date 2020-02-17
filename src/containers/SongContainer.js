import React from 'react';
import SongList from '../components/SongList';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        songs: [],
        selectedSongTitle: {}

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
    const selectedSong = this.state.songs.find(song => {
      return song.title === this.state.selectedSongTitle
    })

    return(
      <div>
        <h1>UK Top 20</h1>
        <SongList songs={this.state.songs} />
      </div>
    )
  }
}

export default SongContainer;
