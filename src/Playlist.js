import React, {useState, useEffect} from 'react';
import Tracklist from './Tracklist';

function Playlist(props) {
  const [plName, setPlName] = useState('');
  const [playlistNamed, setPlaylistNamed] = useState(false);

  const handleChange = ({target}) => {
    setPlName(target.value);
  };

  const handleKeyUp = ({key, keyCode}) => {
    if (plName && (key === 'Enter' || keyCode === 13)) {
      setPlaylistNamed(true);
    }
  };

  const handleClick = () => {
    if (plName) {
      props.setPlaylistName(plName);
    }
  };

  const handleClick_PlName = () => {
    setPlaylistNamed(false);
  }

  return (
    <div style={{width: 450, height: 600, margin: 40, border: '1px solid red', display: 'flex', justifyContent: 'center', overflowY: 'scroll',
                 position: 'relative', top: 40}}>
      <div>
        <div>
          <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', margin: ' 10px 15px'}}>
            {
              !playlistNamed ? <input type="text"
                    aria-label="Enter Playlist Name Here"
                    placeholder="Enter Playlist Name Here..."
                    onChange={handleChange}
                    value={plName}
                    style={{textAlign: 'center', width: 250, margin: '0 auto', marginTop: '24.9px'}}
                    onKeyUp={handleKeyUp}
              />: <strong onClick={handleClick_PlName}><h2 style={{marginBottom: 0, textDecoration: 'underline solid lightgrey'}}>{plName}</h2></strong>
            }
            <Tracklist songs={props.playlistSongs} addToPlaylist={false} setSongs={props.setSongs} plSongUris={props.plSongUris} setPlSongUris={props.setPlSongUris} />
            {(props.playlistSongs.length > 0) ? <button onClick={handleClick} style={{marginBottom: 30}}>Save to Playlist</button>: ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;