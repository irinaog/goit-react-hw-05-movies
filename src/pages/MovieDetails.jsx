import { Container } from "components/SharedLayout.styled"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import moviesAPI from 'services/movies';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        moviesAPI
            .fetchMoviedetails(movieId)
            .then(movieInform => {
                if (movieDetail !== null) {
                    return
                }
                setMovieDetail(movieInform);
                // console.log(movieDetail);
                return
            });
    }, [movieId,movieDetail]);
    
    // const { poster_path, original_title, overview, genres, } = movieDetail;
  
    return (
        <Container>
             {/* <img alt='hello' src='#' />
            <h2>Lorem</h2>
            <p>inf</p>
            <h3>Overwiev</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <h3>Genres</h3>
            <p>
            Lorem ipsum dolor 
                </p> */}
            {movieDetail && <>
              <img alt={movieDetail.original_title} src={movieDetail.poster_path} />
            <h2>{movieDetail.original_title}</h2>
            <p>inf</p>
            <h3>Overwiev</h3>
            <p>{ movieDetail.overview}</p>
            <h3>Genres</h3>
            <p>
            {movieDetail.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
            ))}
                </p>
            </>}
          
            
       </Container> 
    )
}

//  <img alt='hello' src='#' />
//             <h2>Lorem</h2>
//             <p>inf</p>
//             <h3>Overwiev</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
//             <h3>Genres</h3>
//             <p>
//             Lorem ipsum dolor 
//                 </p>