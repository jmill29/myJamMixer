import React, { useState, useEffect } from 'react';
import Tracklist from './Tracklist';

function SearchResults(props) {
  return (
    <div style={{width: 500, height: 600, margin: 40,
                 border: '1px solid red', display: 'flex', justifyContent: 'center',
                 position: 'relative', top: 40}}>
      <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
        <div style={{width: '100%', height: '100%', overflowY: 'scroll',
                     paddingRight: 17, boxSizing: 'content-box'}}>
          <div style={{margin: '10px 45px'}}>
            <Tracklist songs={props.data} addToPlaylist={true} setSongs={props.setSongs} plSongUris={props.plSongUris} setPlSongUris={props.setPlSongUris} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;