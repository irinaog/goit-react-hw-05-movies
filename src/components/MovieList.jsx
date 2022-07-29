import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

const MovieList = ({ movies }) => {
    const location = useLocation();
    console.log('List;',location)
    return (
        <Container>
        <ul>
            {movies.map(({original_title, id}) => (
                <li key={id} >
                    {location.pathname === '/' ?
                        <Link to={ `movies/${id}`} state={{from:location}}>{original_title}</Link> :
                        <Link to={ `${id}`} state={{from:location}}>{original_title}</Link>}
                    
                </li>
            ))}
            </ul>
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