// import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
// import moviesAPI from 'services/movies';
// import MovieList from "./MovieList";


export const SearchBar = ({onSubmit}) => {
    const [movieName, setMovieName] = useState('');
    // const [movieSearch, setMovieSearch] = useState('');
    // const [movies, setMovies] = useState(null);
    
    
    // useEffect(() => {
    //     if (!movieSearch) {
    //         return;
    //     };
        
    //     moviesAPI
    //         .fetchMovieSearch(movieSearch)
    //         .then(film => {
    //             setMovieSearch('')
    //             setMovies(film.results)
    //             return;
    //         });
            
    // },[movieSearch, movies]);
        

    const handleChange = (e) => {
        setMovieName(e.currentTarget.value)
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (movieName.trim() === '') {
    //         alert('Please enter smth')
    //         return;
    //     }

    //     setMovieSearch(movieName);
    //     setMovieName('');
    // };
      const handleSubmit = (e) => {
        e.preventDefault();

        if (movieName.trim() === '') {
            alert('Please enter smth')
            return;
        }

        onSubmit(movieName);
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
        
            {/* {movies && <MovieList movies={movies}/>} */}
        </>
    )
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}