import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { List, Item, } from "components/MovieList/MovieList.styled";
import moviesAPI from 'services/movies';



const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        moviesAPI
            .fetchReviews(movieId)
            .then(review => {
                if (review.total_results === 0) {
                    return setStatus('rejected')
                }
                setReviews(review.results)
                setStatus('resolved')
                // console.log(review)
                return
            });
    }, [movieId]);
   



    return (
        <>
            {status === 'resolved' &&
                <List>
                    {reviews.map(({ author, content, id }) => (
                        <Item key={id}>
                            <p>Author: <span>{author}</span></p>
                            <p>{content}</p>
                        </Item>
                    ))}
                </List>}
            {status ==='rejected' && <div>No results</div>}
        </>
    )
}

export default Reviews;