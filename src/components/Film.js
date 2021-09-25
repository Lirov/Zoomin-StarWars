import React from 'react';
import {useState, useEffect} from 'react';
import FilmInfo from './FilmInfo';

function Film(props) {

    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [species, setSpecies] = useState([]);

    // a function that loops over the API url's, and saves the "name" key for display.

    const fetchFilmRelationHandler = async (relationUrls, setRelationName) => {
        
          const response = await Promise.all(relationUrls.map((url) => {
            return fetch(url);
          }));
          const data = await Promise.all(response.map((item) => {
            return item.json();
          }));
          setRelationName(data.map(relation => relation.name));
        
      }

    useEffect(() => {
    
        fetchFilmRelationHandler(props.film.characters,setCharacters);
        fetchFilmRelationHandler(props.film.planets,setPlanets);
        fetchFilmRelationHandler(props.film.starships,setStarships);
        fetchFilmRelationHandler(props.film.vehicles,setVehicles);
        fetchFilmRelationHandler(props.film.species,setSpecies);
    
      }, [props.film]);

    return (
        
        <table>
        <thead>
        <tr>
          <th scope="col" >Episode id</th>
          <th scope="col" >Opening Crawl</th>
          <th scope="col" >Director</th>
          <th scope="col" >Producer</th>
          <th scope="col" >Release Date</th>
          <th scope="col" >Characters</th>
          <th scope="col" >Planets</th>
          <th scope="col" >Starships</th>
          <th scope="col" >Vehicles</th>
          <th scope="col" >Species</th>
          <th scope="col" >Created</th>
          <th scope="col" >Edited</th>
          <th scope="col" >Url</th>
        </tr>
        <tr>
        <td>{props.film.episode_id}</td>
        <td>{props.film.opening_crawl}</td>
        <td>{props.film.director}</td>
        <td>{props.film.producer}</td>
        <td>{props.film.release_date}</td>
        <FilmInfo items = {characters}/>
        <FilmInfo items = {planets}/>
        <FilmInfo items = {starships}/>
        <FilmInfo items = {vehicles}/>
        <FilmInfo items = {species}/>
        <td>{props.film.created.slice(0, 10)}</td>
        <td>{props.film.edited.slice(0, 10)}</td>
        <td>{props.film.url}</td>
        </tr>
      </thead>
            </table>

    );
}

export default Film;