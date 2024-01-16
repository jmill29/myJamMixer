const userLogin = async (params, props) => {
  const {input_key, setLogInError, setToken} = params;

  const url = 'https://api.spotify.com/v1/';
  const urlParams = 'search';
  const searchParams = '?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album';
  const endpoint = url + urlParams + searchParams;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: 'Bearer ' + input_key
      }
    });
    if (response.ok) {
      setLogInError(false);
      setToken('');
      props.setLoggedIn(true);
      params.setUserInfo(prev => {
        return {api_key: input_key, userId: prev.userId};
      });
    } else {
      setLogInError(true);
    }
  } catch (error) {
    console.log(error);
  }
}

export default userLogin;