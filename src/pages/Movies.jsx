import { SearchBar } from "components/SearchBar"
import { Container } from "components/SharedLayout.styled"
import { useEffect } from "react";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import moviesAPI from 'services/movies';
import MovieList from "../components/MovieList";

const Movies = () => {
    // const location = useLocation();
    // console.log('Movies:', location)

    const [moviesName, setMoviesName] = useState('');
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        if (!moviesName) {
            return;
        };
        
        moviesAPI
            .fetchMovieSearch(moviesName)
            .then(film => {
                // setMovieSearch('')
                setMovies(film.results)
                return;
            });
    },[moviesName]);

    const handleFormSubmit = moviesName => {
    setMoviesName(moviesName);
    setMovies(null);
  };

    return (
        <Container>
            <SearchBar onSubmit={handleFormSubmit} />
            {movies && <MovieList movies={movies}/>} 
        </Container>
    )
};

export default Movies;