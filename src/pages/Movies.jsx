import { SearchBar } from "components/SearchBar/SearchBar"
import { Container } from "components/SharedLayout/SharedLayout.styled"
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import moviesAPI from 'services/movies';
import MovieList from "../components/MovieList/MovieList";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesName, setMoviesName] = useState(searchParams.get("query"));
    const [movies, setMovies] = useState(null);
   
    // console.log(searchParams)

    useEffect(() => {
        if (!moviesName ) {
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
        setSearchParams({query:moviesName});
        setMovies(null);
  };

    return (
        <Container>
            <SearchBar onSubmit={handleFormSubmit} />
            {movies!==null && <MovieList movies={movies}/>} 
        </Container>
    )
};

export default Movies;