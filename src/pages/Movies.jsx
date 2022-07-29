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
    const movieName = searchParams.get("query")??'';

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
                console.log(film)
                setMovies(film.results)
                return;
            });
    },[moviesName]);

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