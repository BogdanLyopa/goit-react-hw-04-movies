import React, { Component } from 'react';
import MovieList from '../Components/MovieList/MovieList';
import api from '../services/moviesApi';
import './MovieDetailsPage.scss';

export class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    api.fetchTrendingMovies().then(data => this.setState({ movies: data }));
  }

  render() {
    return (
      <div className="page">
        <h2 className="title">Trending Today</h2>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomePage;
