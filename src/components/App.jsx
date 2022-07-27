
import { Route, Routes } from "react-router-dom";

import { Home } from "pages/Home";

import { SharedLayout } from "./SharedLayout";


import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";


export const App = () => {

//     const [movies, setMovies] = useState(null);
  

 
//     useEffect(() => {
//      moviesAPI.fetchMovie()
//          .then(films => {
//                console.log(films.results)
//              setMovies([...films.results])
//              return;

//         });  
//    },[])
    
  
   
     
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:movieId" element={<MovieDetails/>}></Route>
            </Route>
        </Routes>
)
};

