import { fetchMovieCast } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, ActorDesc } from './Cast.styled';

const placeHolder = `https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`;
const baseImgUrl = `https://image.tmdb.org/t/p/w500/`;

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchCast(id) {
      try {
        const actors = await fetchMovieCast(id);

        setActors([...actors]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast(movieId);
  }, [movieId]);

  return (
    <List>
      {actors.map(actor => {
        return (
          <ActorDesc key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? baseImgUrl + actor.profile_path
                  : placeHolder
              }
              alt=""
              width="100"
              height="150"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </ActorDesc>
        );
      })}
    </List>
  );
};
export default Cast;
