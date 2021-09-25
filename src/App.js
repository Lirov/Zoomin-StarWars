import React, {useState, useEffect} from 'react';
import FilmList from './components/FilmList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './index.css'

const App = () => {

  const [films, setFilms] = useState([]);

  // sending request for all star wars movies data
  const getFilmRequest = async () => {
    const url = 'https://swapi.dev/api/films/'
    const response = await fetch(url);
    const data = await response.json();
    setFilms(data.results);
  };

  // show the data on page loading
  useEffect(() => {
    
    getFilmRequest();

  }, []);
  
  return (

    <div>
      {films.length > 0 ?
        <FilmList films = {films}/>
      :
      <h1>Loading Film's List...</h1>}
    </div>

  );
};

export default App;