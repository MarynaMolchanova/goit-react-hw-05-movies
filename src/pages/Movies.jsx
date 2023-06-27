import { fetchMovieByQuery } from 'components/Api/Api';
import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SerchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');
  const [searchValue, setSearchValue] = useState(query ? query : '');
  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(() => {
    async function fetchMoviesList(value) {
      try {
        const moviesArray = await fetchMovieByQuery(value);
        setMoviesArray([...moviesArray]);
      } catch (error) {
        console.log(error);
      }
    }

    if (searchValue === '') {
      return;
    }
    fetchMoviesList(searchValue);
  }, [searchValue]);

  const saveSearchValue = value => {
    if (value === '') {
      return;
    }

    setSearchValue(value);
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchBar onSubmit={saveSearchValue} />
      <MovieList movies={moviesArray} />
    </>
  );
};

export default Movies;
