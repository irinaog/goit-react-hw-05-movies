// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from 'services/movies';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    
    useEffect(() => {
        if (!cast) {
            moviesAPI
        .fetchCast(movieId)
        .then(inform => {
            console.log(inform.cast)
            setCast(inform.cast)
            return
        })
        } 
    },[cast, movieId])
   

    return (
        
        <ul>
            {cast&& cast.map(({ cast_id, name, character, profile_path }) => (
                <li key={cast_id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
                    <p>{name}</p>
                    <p>Character: <span>{character}</span></p>
                </li>
            ))}
                
        </ul>
            
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