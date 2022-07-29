import { Container } from "components/SharedLayout/SharedLayout.styled"
import { Suspense, useEffect,useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import moviesAPI from 'services/movies';

const MovieDetails = () => {
    const location = useLocation();
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    const backLinkHref = location.state?.from ?? "/movies";

    useEffect(() => {
        moviesAPI
            .fetchMoviedetails(movieId)
            .then(movieInform => {
                if (movieDetail !== null) {
                    return
                }
                setMovieDetail(movieInform);
                return
            });
    }, [movieId, movieDetail]);
    
  

    return (
        <>
            <Container>
                <Link to={backLinkHref}>Back</Link>
            {movieDetail && <div>
                <img alt={movieDetail.original_title} src={`https://image.tmdb.org/t/p/w200/${movieDetail.poster_path}`} />
                <h2>{movieDetail.original_title}</h2>
                <p>User score: { movieDetail.vote_average}</p>
                <h3>Overwiev</h3>
                <p>{movieDetail.overview}</p>
                <h3>Genres</h3>
                <p>
                    {movieDetail.genres.map(genre => (
                        <span key={genre.id}>{genre.name} </span>
                    ))}
                </p>
            </div>}
        </Container>
           
        <Container>
            <h2>Additional information</h2>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
            </Container>
            <Suspense fallback={<div>Please wait</div>}>
                <Outlet />
            </Suspense>
        </>
        
      
    )
};

export default MovieDetails;

