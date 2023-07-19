import Fuse from 'fuse.js';
import React, {useState, useEffect, ChangeEvent} from 'react';
import { useNavigate, useParams, useLocation, Navigate  } from 'react-router-dom';
import '../../components/styles/others/FuzzySearchStyles.css'
import banklistjson from '../../testdata/fuzzysearch.json'

// Change the cross to a back arrow icon
// Change the magnifying glass beside the input instead of a placeholder

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

  const [query, updateQuery] = useState('');
  const fuse = new Fuse(banklistjson, options);
  console.log(fuse)
  const results = fuse.search(query);
  const characterResults = query ? results.map(character => character.item) : banklistjson;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  function handleClick(character) {
    updateQuery(character.label);
  }

  return (
    <div className='Fuzbase'>
      <div className='Fuzheader'>
        <button className='Fuztransparent' onClick={() => navigate()}>
          <img src='/assets/back.png' className='Fuzexit' />
        </button>
        <p className='Fuztitle'> Select Bank</p>
      </div>

      <div className='Fuzsearchbase'>
        <div className='Fuzsearchthroughput'>
          <img src='./assets/MagnifyIcon.png' className='DetectiveConan'/>
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