import { Container } from "components/SharedLayout/SharedLayout.styled"
import { Suspense, useEffect,useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import BackLinkHref from "components/BackLinkHref/BackLinkHref";
import { List, Item, } from "components/MovieList/MovieList.styled";
import moviesAPI from 'services/movies';

const MovieDetails = () => {
    const location = useLocation();
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    const backLinkHref = location.state?.from ?? "movies";
    // console.log(location.state.from)

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
                <BackLinkHref backLink={backLinkHref}/>
                {/* <Link to={backLinkHref}>Back</Link> */}
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
            <List>
                <Item>
                    <Link to='cast'>Cast</Link>
                </Item>
                <Item>
                    <Link to='reviews'>Reviews</Link>
                </Item>
            </List>
            </Container>
            <Suspense fallback={<div>Please wait</div>}>
                <Outlet />
            </Suspense>
        </>
        
      
    )
};

export default MovieDetails;

