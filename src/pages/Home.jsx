import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/Api/Api';
import MovieList from 'components/MovieList/MovieList';
import { Container } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesArray = await fetchTrendingMovies();

        setMovies([...moviesArray]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <Container>
      <MovieList movies={movies} />
    </Container>
  );
};

export default Home;
