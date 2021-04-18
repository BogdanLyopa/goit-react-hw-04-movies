import { withRouter } from 'react-router-dom';
import './Reviews.scss';
const Reviews = ({ reviews, location }) => {
  return (
    <>
      {reviews.length > 0 ? (
        <ul className="review__list">
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="review__text">
          We don't have any reviews for this movie!
        </p>
      )}
    </>
  );
};

export default withRouter(Reviews);
