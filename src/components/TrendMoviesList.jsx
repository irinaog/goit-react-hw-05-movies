import { Link } from "react-router-dom"
import { Container } from "./SharedLayout.styled"

export const TrendMoviesList = ({movies}) => {
    return (
        <Container>
            <ul>
                {movies && movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`} >{ movie.title}</Link>
                    </li>
                ))}
               
            </ul>
            </Container>
    )
}