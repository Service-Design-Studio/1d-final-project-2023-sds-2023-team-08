import Fuse from 'fuse.js';
import React, {useState} from 'react';
import { useNavigate, useParams, useLocation} from 'react-router-dom';
import '../../components/styles/bank account/FuzzySearchStyles.css'
import banklistjson from '../../components/fuzzysearch.json'

console.log('fuz')
const options = {
  keys: ["label", "abbrv"],
  shouldSort: true,
  includeMatches: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  findAllMatches: true
};

const FuzzySearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationdata = location.state;
  const {userID} = useParams();

  const [query, updateQuery] = useState('');
  const fuse = new Fuse(banklistjson, options);
  console.log(fuse)
  const results = fuse.search(query);
  const characterResults = query ? results.map(character => character.item) : banklistjson;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  function handleClick(character) {
    console.log(character.label)
    locationdata['bank'] = character.label
    navigate(`/${userID}/accounttransferrecipient`, {state:locationdata})
  }

  return (
    <div className='Fuzbase'>
      <div className = 'RefuteDisputeHeader'>
          <button id ='backarrow' className= 'transparent' onClick= {() => navigate(`/${userID}/accounttransferrecipient`, {state:locationdata})}>
              <img src = '/assets/back.png' className = 'back'/>
          </button>
          <p className='RefuteDisputeHeaderText'>Select Bank</p>
      </div>

      <div className='Fuzsearchbase'>
        <div className='Fuzsearchthroughput'>
          <img src='/assets/MagnifyIcon.png' className='DetectiveConan'/>
          <input
            className='Fuzsearchinput'
            placeholder='Search'
            type='text'

            value={query}
            onChange={onSearch}
          />
          </div>
      </div>

      <div className="Fuzscrollview">
        {characterResults.map(character => {
          const {label} = character;
          return (
            <button 
              className="Fuzbutton"
              onClick={() => handleClick(character)}>
              {label}
            </button>
          )
            })}
        </div>
    </div>
  );
};


export default FuzzySearch;