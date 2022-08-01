// import PropTypes from 'prop-types';
import { useEffect, useState  } from 'react';
import {  useParams } from 'react-router-dom';
import moviesAPI from 'services/movies';
import { ActorsList, ActorItem, Text } from './Cast.styled';
// import { useLocation } from 'react-router-dom';


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    // const location = useLocation();
    // console.log('Cast:',location.search)
    
    
    useEffect(() => {
        if (movieId) {
            moviesAPI
        .fetchCast(movieId)
                .then(inform => {
                    if (cast !== null) {
                return
            }
            setCast(inform.cast)
            return
        })
        } 
    },[cast, movieId])
   

    return (<>
        <ActorsList>
            {cast&& cast.map(({ cast_id, name, character, profile_path }) => (
                <ActorItem key={cast_id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
                    <Text>{name}</Text>
                    <Text>Character: <span>{character}</span></Text>
                </ActorItem>
            ))}
                
        </ActorsList>
            </>
    )
};

export default Cast;

// Cast.propTypes = {
//     actors: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         character: PropTypes.string.isRequired,
//         profile_path:PropTypes.string,
//     }))
// }