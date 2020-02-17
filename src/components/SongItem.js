import React, { Component } from 'react';

function SongItem(props){
  return(
    <div>
      <h4>{props.chartPosition}.{props.titleArtist}</h4>
    </div>
  )
}

export default SongItem;
