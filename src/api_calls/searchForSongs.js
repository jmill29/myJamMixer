//const api_key = 'BQDMZfauMzXSDsu0EGdZKNhaN_fSRReurCMBKtNq1JhOHVrSJINYuA3vfAauoeP2vRCebwWUMS9APUIo7To48mUjjQawAGBoAY21rTXkftE1X9TrGDk';

const searchForSongs = async (params) => {
  let url = generateUrl(params.searchQuery);
  console.log(params.api_key);

  try {
    const response = await fetch(url, {
      headers: {Authorization: 'Bearer ' + params.api_key}
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      params.setSearchResultSongs(generateSearchResults(jsonResponse));
      //console.log(generateSearchResults(jsonResponse));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

function generateUrl(searchQuery) {
  const url = 'https://api.spotify.com/v1';
  const urlParams = '/search';
  const queryParams = getQueryParams(searchQuery);
  return url + urlParams + queryParams;
};

function getQueryParams(searchQuery){
  const queryParams = ['?q=remaster%2520track%3A', '', '&type=track'];
  const searchArr = searchQuery.split(' ');
  queryParams[1] = searchArr.join('%2520');
  return queryParams[0] + queryParams[1] + queryParams[2];
};

function generateSearchResults(jsonResponse) {
  let searchResults = [];
  jsonResponse.tracks.items.forEach((track) => {
    searchResults.push({
      name: track.name,
      band: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    })
  });
  return searchResults;
}

/*let params = {
  api_key: 'BQBMPacdVe0XNeCngK9pTQ3rpegGk58nbWpQ0Bgp1lp_DY5MvVrkOW5PajDm2CFp3F_ZgR5_a-3Dk8pipP59xW0ttE6QJCJ5dyculFfIfDyxt7WfmU4',
  searchQuery: 'sweet home alabama'
};
searchForSongs(params);*/

export default searchForSongs;