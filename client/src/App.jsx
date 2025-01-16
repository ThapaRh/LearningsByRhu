import { useState } from 'react'
import axios from 'axios';
import './App.css';

const apiCall = ()=>{
  axios.get('http://localhost:8080').then((data)=>{
    // return(
    // <p>data</p>
    // )
    console.log(data);
  })
}

function App()
{
  return(
    <div>
      <header>
        <button onClick={apiCall}>Make an api call</button>
      </header>
    </div>
  )
}

export default App;