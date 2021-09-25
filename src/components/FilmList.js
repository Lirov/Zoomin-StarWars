import React from 'react';
import {useState, useEffect} from 'react'
import Film from './Film';

const FilmList = (props) => {

    const [filmDetails, setFilmDetails] = useState([]);
    const [favoriteFilms, setfavoriteFilms] = useState([]);

    // a function that shows the film details after clicking on film title
    const showFilmDetails = (filmTitle) => {
        setFilmDetails(props.films.filter(film => filmTitle === film.title));
    };

    // a function to save user's favorite films
    const addToFavorites = (filmTitle) => {
        favoriteFilms.push(filmTitle);
        setfavoriteFilms([...new Set(favoriteFilms)]);
        localStorage.setItem('favorites', JSON.stringify(favoriteFilms));
    }

    useEffect(() => {
        setfavoriteFilms(JSON.parse(localStorage.getItem('favorites')) || []);
    }, []);

    return (
        <div>
            <div className="titles">
                <h1>Star Wars Films:</h1>
                    {props.films.map((film, index) => 
                        <div key={index}>
                            <h2 onClick={()=>showFilmDetails(film.title)}>{film.title}</h2>
                            <button type="button" className="btn btn-outline-success" onClick={()=>addToFavorites(film.title)}>Add To Favorites</button>
                        </div>
                )}
                <div className="favoriteList">
                <h1 className="favHeadline">Favorite List : </h1>
                {favoriteFilms.length > 0 ? 
                    favoriteFilms.map((favoriteFilm, index) => (
                        <h3 key={index}>{favoriteFilm}</h3>
                )):
                <h3>- List is Empty -</h3>}
            </div>  
            </div>
            <div>
                {filmDetails.map((film,index) => (
                    <Film film={film} key={index}/>
                ))}
            </div>  
        </div>
    );
};

export default FilmList;