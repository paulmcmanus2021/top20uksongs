import React, { Fragment } from 'react';
import SongItem from './SongItem';

function SongList(props){

  const songList = props.songs.map((song, index) => {
    return(
      <SongItem titleArtist={song.title.label}  key={index + 1} chartPosition={index + 1}></SongItem>
    )
  })

  return(
    <Fragment>
      {songList}
    </Fragment>
  )
}

export default SongList;
