import { Outlet } from "react-router-dom"
import { Container, Header, Link } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Header>
            <Outlet/>
        </Container>
    )
}