import React, {useEffect, useState} from "react";
import "./App.css";
import Title from './Title';
import Description from './Description';
import Media from './Media';
import Date from './Date';

import axios from 'axios';


function App() {
  const [nasaData, setNasaData] = useState([])
  console.log(nasaData)


  const fetchData = () => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=aecSP0hszd6hz6roNv2lEplKMU8aOWbZX3U3A6CK')
    .then(res => {
      setNasaData(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect( () => {
    fetchData();
  }, [])
  


  return (
    <div className="App">
     <Title nasaData={nasaData}/>
     <Date nasaData={nasaData}/>
     <Media nasaData={nasaData}/>
     <Description nasaData={nasaData} />
    </div>
  );
}

export default App;
