import React, { Component } from 'react';
import MovieList from '../Components/MovieList/MovieList';
import queryString from 'query-string';
import api from '../services/moviesApi';
import './MovieDetailsPage.scss';
import Loader from 'react-loader-spinner';

export class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    isLoading: false,
  };
  componentDidMount() {
    const querySearch = queryString.parse(this.props.location.search);

    if (querySearch.query) {
      this.setState({ query: querySearch.query });
      this.setState({ isLoading: true });
      api
        .fetchMoviesByName(querySearch.query)
        .then(data => this.setState({ movies: data }))
        .finally(this.setState({ isLoading: false }));
    }
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    api
      .fetchMoviesByName(this.state.query)
      .then(data => this.setState({ movies: data }))
      .finally(this.setState({ isLoading: false }));
    this.props.history.push({ search: `?query=${this.state.query}` });
  };

  render() {
    return (
      <div className="page">
        <h2 className="title">Movies Page</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies by name"
            value={this.state.query}
            required
            onChange={this.handleChange}
          />
          <button className="button-search" type="submit">
            Search
          </button>
        </form>
        {this.state.isLoading && <Loader />}
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MoviesPage;
