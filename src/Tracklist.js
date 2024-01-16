import React from 'react';
import Track from './Track';

function Tracklist(props) {
    const handleClick = ({target}) => {
      let btnId = target.id;
      let idArr = btnId.split('_');
      let songIndex = Number(idArr[1]);
      if (props.addToPlaylist) {
        props.setSongs(prev => [...prev, {
          name: props.songs[songIndex].name,
          band: props.songs[songIndex].band,
          album: props.songs[songIndex].album,
          uri: props.songs[songIndex].uri
        }]);
        props.setPlSongUris(prev => [...prev, props.songs[songIndex].uri])
      } else {
        props.setSongs(prev => prev.filter((el, index) => index !== songIndex));
        props.setPlSongUris(prev => prev.filter((el, index) => index !== songIndex));
      }
    };
  
  return (
    <ul style={{padding: 0}}>
      {props.songs.map((el, index) => {
        let targetUri = el.uri;
        return (
          ((props.addToPlaylist && !(props.plSongUris.includes(el.uri))) || !(props.addToPlaylist)) ? 
          <li style={{display: 'flex', justifyContent: 'space-between', marginTop: 20, marginBottom: 20,
                      borderBottom: '1px solid black', paddingBottom: 15, alignItems: 'center'}}>
            <div style={{marginRight: 50}}>
              <Track song={el.name} band={el.band} album={el.album} />
            </div>
            <button id={'btn_' + index} style={{width: 30, height: 30, position:'relative', fontSize: 24,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={handleClick}>{props.addToPlaylist ? '+': 'X'}</button>
          </li>: ''
        );
      })}
    </ul>
  );
};

export default Tracklist;