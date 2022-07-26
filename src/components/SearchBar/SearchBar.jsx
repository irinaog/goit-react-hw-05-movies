// import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import { Input, Btn } from "./SearchBar.styled";
// import moviesAPI from 'services/movies';
// import MovieList from "./MovieList";


export const SearchBar = ({onSubmit}) => {
    const [movieName, setMovieName] = useState('');

    const handleChange = (e) => {
        setMovieName(e.currentTarget.value)
    };

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
            <Input type="text"
            value={movieName}
            onChange={handleChange} 
            />
            <Btn type='submit'>Search</ Btn>
        </form>
        
            {/* {movies && <MovieList movies={movies}/>} */}
        </>
    )
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}