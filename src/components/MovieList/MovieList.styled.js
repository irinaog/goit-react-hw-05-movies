import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
list-style:none;
`

export const Item = styled.li`
margin-top:4px;
`

export const Movie = styled(Link)`
text-decoration: none;
color:blue;
`