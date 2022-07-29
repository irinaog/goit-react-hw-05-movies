import { SearchBar } from "components/SearchBar/SearchBar"
import { Container } from "components/SharedLayout/SharedLayout.styled"
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import moviesAPI from 'services/movies';
import MovieList from "../components/MovieList/MovieList";

const Movies = () => {
    const [moviesName, setMoviesName] = useState('');
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (moviesName==='') {
            return;
        };
        
        moviesAPI
            .fetchMovieSearch(moviesName)
            .then(film => {
                if (film.total_results === 0) {
                    return alert('Nothing found')
                }
                setMovies(film.results)
                return;
            });
    },[moviesName,searchParams]);

    const handleFormSubmit = moviesName => {
        setMoviesName(moviesName);
        setSearchParams({query: moviesName})
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