import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container, Header, Link } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Link end to="/goit-react-hw-05-movies">Home</Link>
                <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
            </Header>
            <Suspense fallback={<div>Loading ...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}