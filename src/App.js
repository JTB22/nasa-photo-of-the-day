import React, { useState, useEffect} from "react";
import axios from 'axios'
import NasaPhoto from "./Components/NasaPhoto";
import "./App.css";

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=KMeZKu44hKGYZ2LbTr3Il3oHtcD4skfVU4V2qHJM')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }

    </div>
  );
}

export default App;
