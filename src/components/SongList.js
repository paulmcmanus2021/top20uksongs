import React, { Fragment } from 'react';

function SongList(props){

  const songList = props.songs.map((song, index) => {
    return(
      <p>song</p>
    )
  })

  return(
    <Fragment>
      {songList}
    </Fragment>
  )
}

export default SongList;
