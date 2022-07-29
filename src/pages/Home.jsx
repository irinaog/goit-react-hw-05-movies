import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import moviesAPI from 'services/movies';

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
            {movies&&<MovieList movies={ movies} />}
            
        </main>
    )
};

// export default Home;