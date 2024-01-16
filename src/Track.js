import React, { useEffect } from 'react';

function Track(props) {
  const propsList = ['band', 'album'];
  let outputs = {band: '', album: ''};
  for (let prop of propsList) {
    if (props[prop].length > 20) {
      for (let i = 0; i < 20; i++) {
        outputs[prop] = outputs[prop] + props[prop][i];
      }
      outputs[prop] = outputs[prop] + '...';
    } else {
      outputs[prop] = props[prop];
    }
  }

  return (
    <>
      <h3 style={{margin: 10}}>{props.song}</h3>
      <h4 style={{margin: 10, width: 250}}>{outputs.band + ' | ' + outputs.album}</h4>
    </>
  );
};

export default Track;