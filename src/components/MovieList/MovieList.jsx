import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, MovieLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  function createUrl(location, movie) {
    let urlPath;

    if (location.pathname !== '/movies') {
      urlPath = `/movies/${movie.id}`;
    } else {
      urlPath = `${movie.id}`;
    }

    return urlPath;
  }

  return (
    <List>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieLink
              to={createUrl(location, movie)}
              state={{ from: location }}
            >
              {movie.title}
            </MovieLink>
          </li>
        );
      })}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
