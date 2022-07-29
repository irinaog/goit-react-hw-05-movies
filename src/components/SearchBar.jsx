import { useEffect } from "react";
import { useState } from "react";
import moviesAPI from 'services/movies';
import MovieList from "./MovieList";


export const SearchBar = () => {
    const [movieName, setMovieName] = useState('');
    const [movieSearch, setMovieSearch] = useState('');
    const [movies, setMovies] = useState(null);
    
    
    useEffect(() => {
        if (!movieSearch) {
            return;
        };
        
        moviesAPI
            .fetchMovieSearch(movieSearch)
            .then(film => {
                setMovieSearch('')
                setMovies(film.results)
                return;
            });
            
    },[movieSearch, movies]);
        

    const handleChange = (e) => {
        setMovieName(e.currentTarget.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (movieName.trim() === '') {
            alert('Please enter smth')
            return;
        }

        setMovieSearch(movieName);
        setMovieName('');
    };


    return (
        <>
        <form  onSubmit={handleSubmit}>
            <input type="text"
            value={movieName}
            onChange={handleChange} 
            />
            <button type='submit'>Search</button>
        </form>
        
            {movies && <MovieList movies={movies}/>}
        </>
    )
};