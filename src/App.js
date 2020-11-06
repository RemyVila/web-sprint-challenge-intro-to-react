import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import styled, { keyframes } from "styled-components";
import RickPicContainer from './components/Rick';
import Kyle from './components/Rick';

const App = () => {
  const [kyleData, SetKyleData] = useState({});
  const [RMData, SetRMData] = useState({});
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/291')
      .then(resRick => {
        console.log('this is the resRick', resRick.data);
        SetRMData(resRick.data);
      })
      .catch(errRick => {
        console.log('this is the err', errRick);
      })
      axios.get('https://rickandmortyapi.com/api/character/197')
      .then(resKyle => {
        console.log('this is the resKyle', resKyle.data);
        SetKyleData(resKyle.data);
      })
      .catch(errKyle => {
        console.log('this is the err', errKyle);
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
      <RickPicContainer rickData={RMData} />
      {/* <Kyle kyleData={kyleData} /> */}
    </div>
  );
}

export default App;
