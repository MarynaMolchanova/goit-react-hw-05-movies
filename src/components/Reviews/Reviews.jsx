import { fetchMovieReviews } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews(id) {
      try {
        const reviewsArr = await fetchMovieReviews(id);

        setReviews([...reviewsArr]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <div key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </div>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie. You can be first</p>
      )}
    </>
  );
};
export default Reviews;
