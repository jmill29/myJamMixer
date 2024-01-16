import React, { useState, useEffect } from 'react';
import userLogin from './api_calls/userLogin';

function LoginPage(props) {
  const [idToken, setIdToken] = useState('');
  const [token, setToken] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [logInError, setLogInError] = useState(false);

  const handleChange = ({target}) => {
    if (target.id === 'spotify_access_token') {
      setToken(target.value);
    } else if (target.id === 'user_id') {
      setIdToken(target.value);
    }
  };

  const handleKeyUp = ({key, keyCode}) => {
    if (key === 'Enter' || keyCode === 13) {
      if (idToken) {
        setApiKey(token);
        props.setUserInfo(prev => {
          return {api_key: prev.api_key, userId: idToken};
        });
      } else if (!idToken || (token.length !== 115)) {
        setLogInError(true);
      }
    }
  }

  useEffect(() => {
    if (apiKey.length === 115) {
      let params = {
        'input_key': apiKey,
        'setLogInError': setLogInError,
        'setToken': setToken,
        'setUserInfo': props.setUserInfo
      }
      userLogin(params, props);
    }
  }, [apiKey]);

  /*useEffect(() => {
    console.log(idToken);
  }, [idToken])*/

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute'}}>
      <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center'}}>
        <p style={{display: 'block', width: 200, textAlign: 'center'}}>Enter Spotify Credentials to Login</p>
        <input type="text" 
          aria-label="Enter User ID here"
          placeholder="Enter User ID here..."
          id="user_id"
          onChange={handleChange}
          value={idToken}
          style={{margin: ' 30px 45px', width: 270, borderRadius: 7}}
        />
        <input type="password" 
          aria-label="Enter Spotify Access Token here"
          placeholder="Enter Spotify Access Token here..."
          id="spotify_access_token"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          value={token}
          style={{width: 270, borderRadius: 7}}
        />
        {logInError ? <p>The token entered is invalid. Please try again</p>: ''}
      </div>
    </div>
  );
}

export default LoginPage;