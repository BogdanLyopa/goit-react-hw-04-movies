import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import api from '../services/moviesApi';
import Cast from '../Components/Cast/Cast';
import Reviews from '../Components/Reviews/Reviews';
import './MovieDetailsPage.scss';

export class MovieDetailsPage extends Component {
  state = {
    casts: [],
    reviews: [],
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    api.fetchMoviesById(moviesId).then(movie => this.setState({ ...movie }));
    api
      .fetchFilmCasts(moviesId)
      .then(cast => this.setState({ casts: [...cast] }));
    api
      .fetchFilmReviews(moviesId)
      .then(review => this.setState({ reviews: [...review] }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || '');
  };

  render() {
    const year = this.state.release_date;
    const date = new Date(year);
    const data = date.getFullYear();
    const {
      poster_path,
      title,
      vote_average,
      overview,
      genres,
      casts,
      reviews,
    } = this.state;
    const defaultImage =
      'https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image.jpg';
    const image = `https://image.tmdb.org/t/p/w300${poster_path}`;

    return (
      <>
        <div>
          <button
            className="button__back"
            type="button"
            onClick={this.handleGoBack}
          >
            Go back
          </button>
          <div className="movie-details__card">
            <img width="450" src={poster_path ? image : defaultImage} alt="" />
            <div className="movie-details">
              <h2>
                {title}
                <span>({data}) </span>
              </h2>
              <p>User Score: {vote_average * 10}%</p>
              <h3>Overview:</h3>
              {overview}

              <h3>Genres</h3>
              <ul className="genres__list">
                {genres &&
                  genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
              </ul>
            </div>
          </div>
          <div className="additional">
            <NavLink
              className="additional__link"
              activeClassName="additional__link--active"
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: {
                  from: this.props.location?.state?.from,
                },
              }}
            >
              Casts
            </NavLink>
            <NavLink
              className="additional__link"
              activeClassName="additional__link--active"
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: {
                  from: this.props.location?.state?.from,
                },
              }}
            >
              Reviews
            </NavLink>
          </div>
        </div>

        <Route
          path={`${this.props.match.url}/cast`}
          render={props => {
            return <Cast casts={casts} />;
          }}
        />
        <Route
          path={`${this.props.match.url}/reviews`}
          render={props => {
            return <Reviews reviews={reviews} />;
          }}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
