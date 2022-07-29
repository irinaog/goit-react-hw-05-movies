import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../SharedLayout/SharedLayout.styled';
import { List, Item, Movie } from './MovieList.styled';

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <Container>
        <List>
            {movies.map(({original_title, id}) => (
                <Item key={id} >
                    {location.pathname === '/' ?
                        <Movie to={ `movies/${id}`} state={{from:location}}>{original_title}</Movie> :
                        <Movie to={ `${id}`} state={{from:location}}>{original_title}</Movie>}
                    
                </Item>
            ))}
            </List>
        </Container>
    )
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        original_title: PropTypes.string,
    }
    ))
};

export default MovieList;

    // <Container>
    //     <ul>
    //         {movies.map(({original_title, id}) => (
    //             <li key={id} >
    //                 {location.pathname === '/' ?
    //                     <Link to={ `movies/${id}`}>{original_title}</Link> :
    //                     <Link to={ `${id}`}>{original_title}</Link>}
                    
    //             </li>
    //         ))}
    //         </ul>
    //     </Container>