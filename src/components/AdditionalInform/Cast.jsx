// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from 'services/movies';
import { ActorsList, ActorItem, Text } from './Cast.styled';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    
    useEffect(() => {
        if (!cast) {
            moviesAPI
        .fetchCast(movieId)
        .then(inform => {
            setCast(inform.cast)
            return
        })
        } 
    },[cast, movieId])
   

    return (
        
        <ActorsList>
            {cast&& cast.map(({ cast_id, name, character, profile_path }) => (
                <ActorItem key={cast_id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
                    <Text>{name}</Text>
                    <Text>Character: <span>{character}</span></Text>
                </ActorItem>
            ))}
                
        </ActorsList>
            
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