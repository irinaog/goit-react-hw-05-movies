import { useEffect, useState } from "react";
import { TrendMoviesList } from "components/TrendMoviesList";
import moviesAPI from 'services/movies';
// const { Link } = require("react-router-dom")

export const Home = () => {
    const [movies, setMovies] = useState(null);
  
    useEffect(() => {
     moviesAPI.fetchMovie()
         .then(films => {
            //    console.log(films.results)
             setMovies([...films.results])
             return;

        });  
   },[])
    return (
        <main>
            <h1>Trending today</h1>
            <TrendMoviesList movies={ movies} />
        </main>
    )
};

// export default Home;