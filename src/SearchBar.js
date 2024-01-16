import React, {useState} from 'react';

function SearchBar(props) {
  const [userInput, setUserInput] = useState('');

  const handleChange = ({target}) => {
    setUserInput(target.value);
  };

  const handleSubmit = () => {
    props.setSearch(userInput);
    setUserInput('');
  };

  const handleMouseEnter = ({target}) => {
    target.style.fontWeight = 'bold';
  };

  const handleMouseLeave = ({target}) => {
    target.style.fontWeight = 'normal';
  };

  return (
    <>
      <button style={{position: 'fixed', top: 40, right: 50, border: 'none', backgroundColor: 'white'}} id='logout_btn' 
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={props.handleClick}>
                  Log Out
      </button>
      <div style={{width: 230, margin: '0 auto', marginTop: 40, display: 'flex'}}>
        <input type="text" 
              aria-label="Search for songs here"
              placeholder="Search for songs here..."
              id="search"
              onChange={handleChange}
              value={userInput}
        />
        <button aria-label="search" onClick={handleSubmit}>
          <img src={require('./img/search.png')} 
              style={{width: 15, height: 15}} />
        </button>
      </div>
    </>
  );
};

export default SearchBar;