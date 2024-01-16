import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import LoginPage from './LoginPage';
import searchForSongs from './api_calls/searchForSongs';

function App() {
  document.body.style.backgroundColor = 'deepskyblue';

  
  const [songs, setSongs] = useState([]);
  const [plSongUris, setPlSongUris] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResultSongs, setSearchResultSongs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [userInfo, setUserInfo] = useState({api_key: '', userId: ''});

  const url = 'https://api.spotify.com/v1';

  const handleClick = () => {
    setLoggedIn(false);
    setSongs([]);
    setPlSongUris([]);
    setSearch('');
    setSearchResultSongs([]);
    setPlaylistName('');
  }

  useEffect(() => {
    if (search) {
      let params = {
        api_key: userInfo.api_key,
        searchQuery: search,
        setSearchResultSongs: setSearchResultSongs
      };
      searchForSongs(params);
    }
  }, [search])

  useEffect(() => {
    if (userInfo.api_key && userInfo.userId) {
      console.log(userInfo);
    }
  }, [userInfo]);

  /*useEffect(() => {
    console.log(playlistName);
  }, [playlistName]);*/

  return (
    <>
      {loggedIn ? (
        <>
          <SearchBar setSearch={setSearch} handleClick={handleClick} />
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
            <SearchResults setSongs={setSongs} data={searchResultSongs} plSongUris={plSongUris} setPlSongUris={setPlSongUris} />
            <Playlist playlistSongs={songs} setSongs={setSongs} plSongUris={plSongUris} setPlSongUris={setPlSongUris} setPlaylistName={setPlaylistName} />
          </div>
        </>): (
        <>
          <LoginPage setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} />
        </>
      )}
    </>
  );
}

export default App;