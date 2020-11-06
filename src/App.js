import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import styled, { keyframes } from "styled-components";


const App = () => {

  const [RMData, SetRMData] = useState({});
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/291')
      .then(res => {
        console.log('this is the res', res.data);
      })
      .catch(err => {
        console.log('this is the err', err);
      })
  } ,[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Rick & Morty Characters</h1>
    </div>
  );
}

export default App;
