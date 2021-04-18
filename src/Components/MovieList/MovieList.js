import { Link, withRouter } from 'react-router-dom';
import './MovieList.scss';

const MovieList = ({ movies, location }) => {
  return (
    <ul className="Movie__list">
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id}>
          <Link
            className="Movie__link"
            to={{
              pathname: `movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <p>{title || name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
