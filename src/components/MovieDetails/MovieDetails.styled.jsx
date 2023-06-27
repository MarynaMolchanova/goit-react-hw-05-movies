import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: circle;
  text-decoration: none;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

export const FilmDesc = styled.div`
  margin-top: 20px;
`;
